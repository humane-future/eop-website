import { createGlobalStyle, css } from 'styled-components';
import { Theme } from './theme';

const GlobalStyles = createGlobalStyle`
  ${({ theme }: { theme: Theme }) => css`
    body {
      margin: 0;
      background-color: ${theme.colors.GhostWhite};
      color: ${theme.colors.BlackCoral};
    }

    * {
      font-family: 'Raleway', sans-serif;
      box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Oswald', sans-serif;
    }

    html {
      font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
    }
  `}
`;

export default GlobalStyles;
