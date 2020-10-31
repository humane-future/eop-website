import React from 'react';
import { Entry } from 'contentful';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import App from '../src/App';
import { EntryFields } from './types';

const ssr = (data: Entry<EntryFields>): NodeJS.ReadableStream => {
  const sheet = new ServerStyleSheet();
  const jsx = sheet.collectStyles(
    <StaticRouter location={data.fields.urlPath}>
      <App data={data} />
    </StaticRouter>,
  );
  return sheet.interleaveWithNodeStream(renderToNodeStream(jsx));
};

export default ssr;
