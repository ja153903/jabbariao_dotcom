import { Container } from '@chakra-ui/react'

import type { PageContainerProps } from '../@types'

function PageContainer({ children }: PageContainerProps) {
  return <Container maxW="lg">{children}</Container>
}

export default PageContainer
