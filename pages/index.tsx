import type { NextPage } from 'next'

import { Text, Link } from '@chakra-ui/react'

import PageContainer from '../components/PageContainer'
import Section from '../components/Section'

const About: NextPage = () => {
  return (
    <PageContainer>
      <Section title="What am I currently working on?">
        <Text>Writing articles on TypeScript and JavaScript!</Text>
      </Section>
      <Section title="About Me">
        <Text mb="10px" maxW="600px">
          I am Jaime Abbariao. Currently working as a software engineer at{' '}
          <Link href="https://getbento.com" color="#8FBCBB" isExternal>
            BentoBox
          </Link>
          .
        </Text>
        <Text mb="10px" maxW="600px">
          I spent undergrad and grad school figuring out how machine learning
          works, but in the end, I decided I wanted to build scalable
          applications instead.
        </Text>
        <Text mb="10px" maxW="600px">
          These days, you can find me working on side-projects in TypeScript or
          tinkering with my Neovim configuration
        </Text>
        <Text maxW="600px">
          I also take photos. You can find my work on{' '}
          <Link
            href="https://www.instagram.com/jaimeabbariao/"
            color="#8FBCBB"
            isExternal
          >
            Instagram
          </Link>
        </Text>
      </Section>
      <Section title="Contact">
        <Text maxW="600px">
          Feel free to contact me at{' '}
          <Link href="mailto:jaimeabbariao@gmail.com" color="#8FBCBB">
            jaimeabbariao@gmail.com
          </Link>{' '}
          for any business inquiries
        </Text>
      </Section>
    </PageContainer>
  )
}

export default About
