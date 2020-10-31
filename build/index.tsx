import dotenv from 'dotenv';
import { createClient, Entry } from 'contentful';
import { finished as _finished } from 'stream';
import { promisify } from 'util';
import { once } from 'events';
import { resolve, join, relative } from 'path';
import {
  copy,
  readFile,
  emptyDir,
  ensureDir,
  createWriteStream,
} from 'fs-extra';
import { EntryFields } from '../src/types';
import ssr from '../src/ssr';

dotenv.config();

const finished = promisify(_finished);

const ROOT = resolve(__dirname, '../');
const DIST = join(ROOT, 'dist');
const BUNDLE = join(ROOT, 'bundle');
const HTML_TEMPLATE = join(BUNDLE, 'index.html');

interface BuildPageParams {
  template: [string, string];
  data: Entry<EntryFields>;
}

const buildPage = async ({ template, data }: BuildPageParams) => {
  const urlPath = data.fields.urlPath;
  const dirPath = join(DIST, relative('/', urlPath));

  await ensureDir(dirPath);

  const filePath = join(dirPath, 'index.html');
  const fileStream = createWriteStream(filePath, 'utf8');

  fileStream.write(template[0]);

  const renderStream = ssr(data);

  for await (const chunk of renderStream) {
    if (!fileStream.write(chunk)) {
      await once(fileStream, 'drain');
    }
  }

  fileStream.write(
    `<script>const GENERATED_PAGE_DATA=${JSON.stringify(data)}</script>`,
  );

  fileStream.end(template[1]);

  await finished(fileStream);
};

const getTemplate = async () => {
  const pageTemplate = await readFile(HTML_TEMPLATE, 'utf8');
  const searchIndex = '<div id="app-wrapper">';
  return [
    pageTemplate.slice(
      0,
      pageTemplate.indexOf(searchIndex) + searchIndex.length,
    ),
    pageTemplate.slice(pageTemplate.indexOf(searchIndex) + searchIndex.length),
  ] as [string, string];
};

const buildPages = async () => {
  const client = createClient({
    space: String(process.env.CONTENTFUL_SPACE_ID),
    accessToken: String(process.env.CONTENTFUL_DELIVERY_TOKEN),
  });

  const { items } = await client.getEntries<EntryFields>({
    content_type: 'entry',
    limit: 1000,
  });

  const template = await getTemplate();

  await Promise.all(items.map((data) => buildPage({ template, data })));
};

const run = async () => {
  await emptyDir(DIST);
  await Promise.all([copy(BUNDLE, DIST), buildPages()]);
};

run();
