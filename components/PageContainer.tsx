import { Container } from '@chakra-ui/react'

interface PageContainerProps {
  children: React.ReactNode
}

function PageContainer({ children }: PageContainerProps) {
  return <Container maxW="container.xl">{children}</Container>
}

export default PageContainer
