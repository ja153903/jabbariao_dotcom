import { Text } from '@chakra-ui/react'

import PageContainer from '@components/PageContainer'
import Section from '@components/Section'

function Custom404() {
  return (
    <PageContainer>
      <Section title="404 - Page Not Found">
        <Text>Interesting. But no.</Text>
      </Section>
    </PageContainer>
  )
}

export default Custom404
