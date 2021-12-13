import '@fontsource/arvo'
import '@fontsource/fira-code'
import '@fontsource/roboto-mono'

import type { AppProps } from 'next/app'
import { ChakraProvider, Container, Flex } from '@chakra-ui/react'

import NavigationBar from '@containers/NavigationBar'
import ScrollToTopButton from '@components/ScrollToTopButton'

import theme from '../themes'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container paddingTop="20px" maxW="container.xl" h="100%">
        <Flex align="flex-start" justify="flex-start">
          <NavigationBar />
          <Component {...pageProps} />
        </Flex>
        <ScrollToTopButton />
      </Container>
    </ChakraProvider>
  )
}

export default App
