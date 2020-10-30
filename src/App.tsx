import { Entry } from 'contentful';
import React from 'react';
import { EntryFields } from './types';

export interface AppProps {
  data?: Entry<EntryFields>;
}

const App = ({ data }: AppProps) => <div>{data?.fields.title}</div>;

export default App;
