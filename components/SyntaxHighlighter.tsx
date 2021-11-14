import ReactSyntaxHighlighter from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { Box } from '@chakra-ui/react'

import type { SyntaxHighlighterProps } from '../@types'

function SyntaxHighlighter({ language, children }: SyntaxHighlighterProps) {
  return (
    <Box
      maxW="xl"
      marginTop="20px"
      marginBottom="20px"
      rounded="xl"
      boxShadow="dark-lg"
    >
      <ReactSyntaxHighlighter
        language={language}
        style={nord}
        showLineNumbers
        wrapLongLines
      >
        {children}
      </ReactSyntaxHighlighter>
    </Box>
  )
}

export default SyntaxHighlighter
