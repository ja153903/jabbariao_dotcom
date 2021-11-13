import type { NextPage } from 'next'

import { Text, Link } from '@chakra-ui/react'

import PageContainer from '../components/PageContainer'
import Section from '../components/Section'

const About: NextPage = () => {
  return (
    <PageContainer>
      <Section title="What am I currently working on?">
        <Text>
          Doing a deep dive into Next.js and Chakra UI with TypeScript
        </Text>
      </Section>
      <Section title="About Me">
        <Text>
          I am Jaime Abbariao. Currently working as a software engineer at{' '}
          <Link href="https://getbento.com" isExternal>
            BentoBox
          </Link>
          .
        </Text>
      </Section>
      <Section title="Contact">
        <Text>
          Feel free to contact me at{' '}
          <Link href="mailto:jaimeabbariao@gmail.com">
            jaimeabbariao@gmail.com
          </Link>
        </Text>
      </Section>
    </PageContainer>
  )
}

export default About
