import ReactSyntaxHighlighter from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { Box } from '@chakra-ui/react'

import type { SyntaxHighlighterProps } from '../@types'

function SyntaxHighlighter({ children }: SyntaxHighlighterProps) {
  return (
    <Box mb="30px" boxShadow="dark-lg" borderRadius="10px">
      <ReactSyntaxHighlighter
        language="javascript"
        style={nord}
        showLineNumbers
        customStyle={{
          padding: 20,
          width: '100%',
          borderRadius: '10px',
        }}
      >
        {children}
      </ReactSyntaxHighlighter>
    </Box>
  )
}

export default SyntaxHighlighter
