import { Link, Text } from '@chakra-ui/react'

import type { ExternalLinkProps } from '../@types'

function ExternalLink({ name, url }: ExternalLinkProps) {
  return (
    <Link isExternal href={url} color="frost.100">
      <Text fontSize="xl">{name}</Text>
    </Link>
  )
}

export default ExternalLink
