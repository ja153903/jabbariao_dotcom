import { Heading, Text } from '@chakra-ui/react'

import { MDXComponentProps } from '../@types'

const MDXComponents = {
  h1: (props: MDXComponentProps) => (
    <Heading as="h1" size="xl">
      {props.children}
    </Heading>
  ),
  h2: (props: MDXComponentProps) => (
    <Heading as="h2" size="lg">
      {props.children}
    </Heading>
  ),
  h3: (props: MDXComponentProps) => (
    <Heading as="h3" size="md">
      {props.children}
    </Heading>
  ),
  p: (props: MDXComponentProps) => (
    <Text as="p" size="md">
      {props.children}
    </Text>
  ),
}

export default MDXComponents
