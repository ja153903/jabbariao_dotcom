import { Heading, Box } from '@chakra-ui/react'

import type { SectionProps } from '../@types'

function Section({ children, title, sx }: SectionProps) {
  return (
    <Box mb="50" sx={sx}>
      <Heading size="lg" marginBottom="10px" color="#B48EAD">
        {title}
      </Heading>
      {children}
    </Box>
  )
}

export default Section
