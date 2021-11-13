import { Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

interface NavigationLinkProps {
  href: string
  label: string
  pathname: string
}

const getTextDecoration = (href: string, pathname: string): string =>
  pathname === href ? 'underline' : 'none'

const getActiveColor = (href: string, pathname: string): string =>
  pathname === href ? '#A3BE8C' : '#ECEFF4'

function NavigationLink({ href, label, pathname }: NavigationLinkProps) {
  const sx = {
    textDecoration: getTextDecoration(href, pathname),
    color: getActiveColor(href, pathname),
  }

  return (
    <Link href={href} passHref>
      <ChakraLink sx={sx}>{label}</ChakraLink>
    </Link>
  )
}

export default NavigationLink
