import { Entry } from 'contentful';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import theme from './theme';
import TopBar from './TopBar';
import { EntryFields } from './types';
import useCMSData from './useCMSData';

export interface AppProps {
  data?: Entry<EntryFields>;
}

const App = ({ data: defaultData }: AppProps) => {
  const cmsData = useCMSData(defaultData);

  if (!cmsData) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <TopBar />
      </div>
    </ThemeProvider>
  );
};

export default App;
