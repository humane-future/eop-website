import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8b6b61',
      main: '#5d4037',
      dark: '#321911',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffd0b0',
      main: '#ff9e80',
      dark: '#c96f53',
      contrastText: '#000000',
    },
  },
});

export default theme;
