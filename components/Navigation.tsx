import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/react'

import NavigationLink from './NavigationLink'

const sitePaths = [
  { href: '/', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/writing', label: 'Writing' },
]

function Navigation() {
  const { pathname } = useRouter()

  return (
    <Flex direction="column" marginTop="20px">
      {sitePaths.map(({ href, label }) => (
        <NavigationLink
          key={`${href}-${label}`}
          href={href}
          label={label}
          pathname={pathname}
        />
      ))}
    </Flex>
  )
}

export default Navigation
