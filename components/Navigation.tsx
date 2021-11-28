import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/react'

import NavigationLink from './NavigationLink'

const sitePaths = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/writing', label: 'Writing' },
]

const mapBlogToWriting = (pathname: string): string =>
  pathname.includes('blog') ? '/writing' : pathname

const preprocessPaths = (pathname: string): string => {
  return mapBlogToWriting(pathname)
}

function Navigation() {
  const { pathname } = useRouter()

  return (
    <Flex direction="column" marginTop="20px">
      {sitePaths.map(({ href, label }) => (
        <NavigationLink
          key={`${href}-${label}`}
          href={href}
          label={label}
          pathname={preprocessPaths(pathname)}
        />
      ))}
    </Flex>
  )
}

export default Navigation
