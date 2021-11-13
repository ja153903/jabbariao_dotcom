import { useRouter } from 'next/router'
import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

function Navigation() {
  const router = useRouter()

  const getTextDecoration = (path: string): string =>
    router.pathname === path ? 'underline' : 'none'

  const getActiveColor = (path: string): string =>
    router.pathname === path ? '#A3BE8C' : '#ECEFF4'

  return (
    <Flex direction="column" marginTop="20px">
      <Link href="/">
        <ChakraLink
          sx={{
            textDecoration: getTextDecoration('/'),
            color: getActiveColor('/'),
          }}
        >
          About
        </ChakraLink>
      </Link>
      <Link href="/resume">
        <ChakraLink
          sx={{
            textDecoration: getTextDecoration('/resume'),
            color: getActiveColor('/resume'),
          }}
        >
          Resume
        </ChakraLink>
      </Link>
      <Link href="/writing">
        <ChakraLink
          sx={{
            textDecoration: getTextDecoration('/writing'),
            color: getActiveColor('/writing'),
          }}
        >
          Writing
        </ChakraLink>
      </Link>
    </Flex>
  )
}

export default Navigation
