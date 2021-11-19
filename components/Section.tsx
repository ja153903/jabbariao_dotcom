import { Heading, Box } from '@chakra-ui/react'

import type { SectionProps } from '../@types'
import { Aurora } from '../themes'

function Section({ children, title, sx }: SectionProps) {
  return (
    <Box mb="50" sx={sx}>
      <Heading size="xl" marginBottom="10px" color={Aurora.Nord15}>
        {title}
      </Heading>
      {children}
    </Box>
  )
}

export default Section
