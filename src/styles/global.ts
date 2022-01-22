import { createGlobalStyle } from 'styled-components';
import ImageBackground from 'assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
  body {
    background: url(${ImageBackground}) repeat 85vw -25vh;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  body:before {
    content: "";
    display: block;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 2;
    background: linear-gradient(transparent, #FFD836 60%);
  }
  button,
  input {
    outline: 0;
  }
  button {
    cursor: pointer;
  }
`;
