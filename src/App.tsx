import { Entry } from 'contentful';
import React from 'react';
import { Link } from 'react-router-dom';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { EntryFields } from './types';
import useCMSData from './useCMSData';
import TopBar from './TopBar';
import GlobalStyles from './GlobalStyles';
import theme from './theme';

export interface AppProps {
  data?: Entry<EntryFields>;
}

const App = ({ data: defaultData }: AppProps) => {
  const cmsData = useCMSData(defaultData);

  if (!cmsData) {
    return null;
  }

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <TopBar>End of Power</TopBar>
          <h1>{cmsData.fields.title}</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default App;
