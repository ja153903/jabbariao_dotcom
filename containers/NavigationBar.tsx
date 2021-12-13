import { Flex } from '@chakra-ui/react'

import Biography from '@components/Biography'
import Navigation from '@components/Navigation'
import Title from '@components/Title'
import Footer from '@components/Footer'

function NavigationBar() {
  return (
    <Flex direction="column" maxW="xl">
      <Title />
      <Biography />
      <Navigation />
      <Footer />
    </Flex>
  )
}

export default NavigationBar
