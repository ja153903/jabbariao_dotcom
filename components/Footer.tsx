import { Box, Stack } from '@chakra-ui/react'

import SocialMediaLinks from './SocialMediaLinks'
import Copyright from './Copyright'

function Footer() {
  return (
    <Box as="footer" mt="20px">
      <Stack>
        <SocialMediaLinks />
        <Copyright />
      </Stack>
    </Box>
  )
}

export default Footer
