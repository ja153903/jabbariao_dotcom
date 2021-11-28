import { Container, Box, Flex } from '@chakra-ui/react'

import { StyledLayoutProps } from '../@types'

function getLayout(layoutType: string) {
  switch (layoutType) {
    case 'container':
      return Container
    case 'flex':
      return Flex
    default:
      return Box
  }
}

function StyledLayout({ layoutType, children, sx }: StyledLayoutProps) {
  const Component = getLayout(layoutType)

  return (
    <Component
      border="1px"
      borderRadius="10px"
      borderStyle="none"
      boxShadow="inner"
      padding="15px"
      maxW="xl"
      bg="polarnight.100"
      sx={sx}
    >
      {children}
    </Component>
  )
}

export default StyledLayout
