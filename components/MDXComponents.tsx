import { Heading, Text } from '@chakra-ui/react'

import { MDXComponentProps } from '../@types'

export default {
  h1: ({ children }: MDXComponentProps) => (
    <Heading as="h1" size="xl">
      {children}
    </Heading>
  ),
  h2: ({ children }: MDXComponentProps) => (
    <Heading as="h2" size="lg">
      {children}
    </Heading>
  ),
  h3: ({ children }: MDXComponentProps) => (
    <Heading as="h3" size="md">
      {children}
    </Heading>
  ),
  p: ({ children }: MDXComponentProps) => (
    <Text as="p" size="md">
      {children}
    </Text>
  ),
}
