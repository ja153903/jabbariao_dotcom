import { Flex } from '@chakra-ui/react'

import Biography from '../components/Biography'
import Navigation from '../components/Navigation'
import Title from '../components/Title'
import Footer from '../components/Footer'

function Introduction() {
  return (
    <Flex direction="column" maxW="2xl">
      <Title />
      <Biography />
      <Navigation />
      <Footer />
    </Flex>
  )
}

export default Introduction
