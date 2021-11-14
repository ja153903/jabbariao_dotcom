import { Container } from '@chakra-ui/react'

import { PageContainerProps } from '../@types'

function PageContainer({ children }: PageContainerProps) {
  return <Container maxW="container.xl">{children}</Container>
}

export default PageContainer
