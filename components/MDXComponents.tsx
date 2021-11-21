import { Heading, Text } from '@chakra-ui/react'

import { MDXComponentProps } from '../@types'
import SyntaxHighlighter from './SyntaxHighlighter'

const MDXComponents = {
  h1: (props: MDXComponentProps) => (
    <Heading as="h1" size="xl" mb="20px">
      {props.children}
    </Heading>
  ),
  h2: (props: MDXComponentProps) => (
    <Heading as="h2" size="lg" mb="20px">
      {props.children}
    </Heading>
  ),
  h3: (props: MDXComponentProps) => (
    <Heading as="h3" size="md" mb="20px">
      {props.children}
    </Heading>
  ),
  p: (props: MDXComponentProps) => (
    <Text as="p" size="md" mb="20px">
      {props.children}
    </Text>
  ),
  code: (props: MDXComponentProps) => (
    <SyntaxHighlighter language={props.language}>
      {props.children}
    </SyntaxHighlighter>
  ),
}

export default MDXComponents
