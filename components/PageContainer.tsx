import { Container } from '@chakra-ui/react'

import type { PageContainerProps } from '../@types'

function PageContainer({ children }: PageContainerProps) {
  return <Container minW="2xl">{children}</Container>
}

export default PageContainer
