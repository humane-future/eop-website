import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  * {
    font-family: 'Raleway', sans-serif;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
  }

  html {
    font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
  }
`;

export default GlobalStyles;
