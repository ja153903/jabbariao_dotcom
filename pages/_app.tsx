import '@fontsource/arvo'
import '@fontsource/fira-code'
import '@fontsource/roboto-mono'

import type { AppProps } from 'next/app'
import { ChakraProvider, Container, Flex } from '@chakra-ui/react'

import Introduction from '../containers/Introduction'

import theme from '../themes'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container paddingTop="20px" maxW="container.xl">
        <Flex align="flex-start" justify="flex-start">
          <Introduction />
          <Component {...pageProps} />
        </Flex>
      </Container>
    </ChakraProvider>
  )
}

export default App
