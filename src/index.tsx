import React from 'react';
import { hydrate, render } from 'react-dom';
import { Entry } from 'contentful';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { EntryFields } from './types';

if (MODE === 'production') {
  hydrate(
    <BrowserRouter>
      <App data={GENERATED_PAGE_DATA as Entry<EntryFields>} />
    </BrowserRouter>,
    document.getElementById('app-wrapper'),
  );
} else {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app-wrapper'),
  );
}
