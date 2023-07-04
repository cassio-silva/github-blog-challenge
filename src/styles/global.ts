import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    background: ${(props) => props.theme['base-background']};
  }
`
