import { useRouter } from 'next/router'
import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

function Navigation() {
  const router = useRouter()

  const getTextDecoration = (path: string): string =>
    router.pathname === path ? 'underline' : 'none'

  return (
    <Flex direction="column" marginTop="20px">
      <Link href="/">
        <ChakraLink sx={{ textDecoration: getTextDecoration('/') }}>
          ABOUT
        </ChakraLink>
      </Link>
      <Link href="/resume">
        <ChakraLink sx={{ textDecoration: getTextDecoration('/resume') }}>
          RESUME
        </ChakraLink>
      </Link>
      <Link href="/writing">
        <ChakraLink sx={{ textDecoration: getTextDecoration('/writing') }}>
          WRITING
        </ChakraLink>
      </Link>
    </Flex>
  )
}

export default Navigation
