import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    &:before, 
    &:after {
      box-sizing: inherit;
    }
  }
  
  html {
    box-sizing: border-box;
    line-height: 1.15;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.main};
    background-color: ${(props) => props.theme.colours.darkBlue};
    color: ${(props) => props.theme.colours.white};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colours.yellow};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  input,
  textarea {
    border: none;
    outline: none;
  }

  button {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;
