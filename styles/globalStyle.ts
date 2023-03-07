import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    overscroll-behavior: none;
  }

  body {
    background-color: ${props => props.theme.colors.background900};
    color: ${props => props.theme.colors.foreground300};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${props => props.theme.fontSize.default};
    font-family: ${props => props.theme.fontFamily["sans-serif"]};
    height: 100vh;
    width: 100vw;
  }

  * {
    font-family: ${props => props.theme.fontFamily["sans-serif"]};
    overscroll-behavior: none;
  }

  #__next {
    height: 100%;
    width: 100%;
  }

  // button and anchor tag css reset
  button, a {
    display: inline-block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-width: 0;
    font-weight: normal;
    font-size: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`
