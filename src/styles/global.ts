import styled, { createGlobalStyle } from 'styled-components';
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
  body #root {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
  body:before {
    content: "";
    display: block;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: -1;
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

export const WrapperScreen = styled.div`
  width: 100%;
  min-height: calc(100% - 248px);
  margin-top: 248px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
`;
