import ReactSyntaxHighlighter from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { Flex } from '@chakra-ui/react'

import type { SyntaxHighlighterProps } from '../@types'

function SyntaxHighlighter({ language, children }: SyntaxHighlighterProps) {
  return (
    <Flex mb="30px" boxShadow="dark-lg">
      <ReactSyntaxHighlighter
        language={language}
        style={nord}
        showLineNumbers
        customStyle={{
          padding: 20,
          width: '100%',
        }}
      >
        {children}
      </ReactSyntaxHighlighter>
    </Flex>
  )
}

export default SyntaxHighlighter
