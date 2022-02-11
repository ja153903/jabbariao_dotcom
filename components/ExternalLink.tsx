import { Link, Text } from '@chakra-ui/react'

import type { ExternalLinkProps } from '@types'

function ExternalLink({ name, url }: ExternalLinkProps) {
  if (!url) {
    return (
      <Text fontSize="xl" color="frost.100">
        {name}
      </Text>
    )
  }
  return (
    <Link isExternal href={url} color="frost.100">
      <Text fontSize="xl">{name}</Text>
    </Link>
  )
}

export default ExternalLink
