import type { AppProps } from 'next/app'
import Head from "next/head";
import { ThemeProvider} from "styled-components";
import {GlobalStyles} from "../styles/global-styles";
import {theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>app</title>
        </Head>
        <GlobalStyles/>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>)
}

export default MyApp
