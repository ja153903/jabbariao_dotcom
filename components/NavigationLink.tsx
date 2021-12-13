import { Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

import type { NavigationLinkProps } from '@types'

const getTextDecoration = (href: string, pathname: string): string =>
  pathname === href ? 'underline' : 'none'

const getActiveColor = (href: string, pathname: string): string =>
  pathname === href ? 'frost.100' : 'snowstorm.300'

function NavigationLink({ href, label, pathname }: NavigationLinkProps) {
  const sx = {
    textDecoration: getTextDecoration(href, pathname),
    color: getActiveColor(href, pathname),
  }

  return (
    <Link href={href} passHref>
      <ChakraLink sx={sx} _hover={{ color: 'frost.100' }}>
        {label}
      </ChakraLink>
    </Link>
  )
}

export default NavigationLink
