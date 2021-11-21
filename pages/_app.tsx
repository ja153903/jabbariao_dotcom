import '@fontsource/arvo'
import '@fontsource/fira-code'
import '@fontsource/roboto-mono'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider, Container, Flex } from '@chakra-ui/react'

import Introduction from '../containers/Introduction'
import ScrollToTopButton from '../components/ScrollToTopButton'

import theme from '../themes'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Jaime Abbariao</title>
      </Head>
      <Container paddingTop="20px" maxW="4xl">
        <Flex align="flex-start" justify="flex-start">
          <Introduction />
          <Component {...pageProps} />
        </Flex>
        <ScrollToTopButton />
      </Container>
    </ChakraProvider>
  )
}

export default App
