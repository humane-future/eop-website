import { Entry } from 'contentful';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { EntryFields } from './types';

if (MODE === 'production') {
  ReactDOM.hydrate(
    <App data={GENERATED_PAGE_DATA as Entry<EntryFields>} />,
    document.getElementById('app-wrapper'),
  );
} else {
  ReactDOM.render(<App />, document.getElementById('app-wrapper'));
}
