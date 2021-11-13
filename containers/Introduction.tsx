import { Flex } from '@chakra-ui/react'

import Biography from '../components/Biography'
import Navigation from '../components/Navigation'
import Title from '../components/Title'

function Introduction() {
  return (
    <Flex direction="column" maxW="container.xl">
      <Title />
      <Biography />
      <Navigation />
    </Flex>
  )
}

export default Introduction
