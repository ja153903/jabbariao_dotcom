import '@fontsource/arvo'
import '@fontsource/fira-code'
import '@fontsource/roboto-mono'

import type { AppProps } from 'next/app'
import Script from 'next/script'
import { ChakraProvider, Container, Flex } from '@chakra-ui/react'

import Introduction from '../containers/Introduction'
import ScrollToTopButton from '../components/ScrollToTopButton'

import theme from '../themes'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
        crossOrigin="anonymous"
      />
      <ChakraProvider theme={theme}>
        <Container paddingTop="20px" maxW="container.xl" h="100%">
          <Flex align="flex-start" justify="flex-start">
            <Introduction />
            <Component {...pageProps} />
          </Flex>
          <ScrollToTopButton />
        </Container>
      </ChakraProvider>
    </>
  )
}

export default App
