import { createClient, Entry } from 'contentful';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { EntryFields } from './types';

const client = createClient({
  space: String(process.env.CONTENTFUL_SPACE_ID),
  accessToken: String(process.env.CONTENTFUL_DELIVERY_TOKEN),
});

const useCMSData = (
  defaultValue?: Entry<EntryFields>,
): Entry<EntryFields> | undefined => {
  const { pathname: urlPath } = useLocation();
  const [data, setData] = useState<Entry<EntryFields> | undefined>(
    defaultValue,
  );
  const fetchData = useCallback(async () => {
    const {
      items: [item],
    } = await client.getEntries<EntryFields>({
      content_type: 'entry',
      'fields.urlPath': urlPath,
    });
    setData(item);
  }, [urlPath]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
};

export default useCMSData;
