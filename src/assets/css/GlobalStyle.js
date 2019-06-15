import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  a, a:active, a:visited {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  body {
    /* Hack for better maintenance ( 10px == 1.0em ) */
    font-size: 62.5%;
    font-family: "Source Sans Pro", sans-serif;
    position: relative;
  }
`;

export default GlobalStyle;
