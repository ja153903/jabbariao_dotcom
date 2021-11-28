import { Text, Link } from '@chakra-ui/react'

import PageContainer from '../components/PageContainer'
import Section from '../components/Section'

function AboutMe() {
  return (
    <Section title="About Me">
      <Text mb="10px" maxW="xl">
        I am Jaime Abbariao.
      </Text>
      <Text mb="10px" maxW="xl">
        Currently working as a software engineer at{' '}
        <Link href="https://getbento.com" color="frost.100" isExternal>
          BentoBox
        </Link>
        .
      </Text>
      <Text mb="10px" maxW="xl">
        I spent undergrad and grad school figuring out how machine learning
        works, but in the end, I decided I wanted to build scalable applications
        instead of doing research.
      </Text>
      <Text mb="10px" maxW="xl">
        These days, you can find me hacking on projects in React, Node, and Deno
        or hot-swapping themes and plugins for my Neovim editor.
      </Text>
      <Text maxW="xl">
        I also take photos. You can find my work on{' '}
        <Link
          href="https://www.instagram.com/jaimeabbariao/"
          color="frost.100"
          isExternal
        >
          Instagram
        </Link>
      </Text>
    </Section>
  )
}

function Contact() {
  return (
    <Section title="Contact">
      <Text maxW="xl">
        Feel free to contact me at{' '}
        <Link href="mailto:jaimeabbariao@gmail.com" color="frost.100">
          jaimeabbariao@gmail.com
        </Link>{' '}
        for any business inquiries
      </Text>
    </Section>
  )
}

function About() {
  return (
    <PageContainer>
      <AboutMe />
      <Contact />
    </PageContainer>
  )
}

export default About
