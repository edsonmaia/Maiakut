import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/MaiakutCommons';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #D9E6F6;
    //background-image: url("/../src/images/bg-nlw05.png");
  }

  #__next {
	  display: flex;
	  min-height: 100vh;
	  flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  ${AlurakutStyles}

`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
