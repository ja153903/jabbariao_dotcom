import type { NextPage } from 'next'

import { Text, Box, UnorderedList, ListItem } from '@chakra-ui/react'

import PageContainer from '../components/PageContainer'
import Section from '../components/Section'

const Resume: NextPage = () => {
  return (
    <PageContainer>
      <Section title="Experience">
        <Box mb="20px">
          <Text fontSize="2xl">BentoBox</Text>
          <Text fontStyle="italic">
            Software Engineer II, Mar. 2021 - Present
          </Text>
          <Text>
            Building technology with React and Django for restaurants to thrive
            online and in-stores
          </Text>
        </Box>
        <Box>
          <Text fontSize="2xl">E*TRADE</Text>
          <Text fontStyle="italic">
            Software Engineer I, Jul. 2019 - Mar. 2021
          </Text>
          <Text>
            Worked on guided investing and portfolio analytics software with
            React and Spring
          </Text>
        </Box>
      </Section>
      <Section title="Education">
        <Box mb="20px">
          <Text fontSize="2xl">New York University</Text>
          <Text fontStyle="italic">
            M.S. Computer Science, GPA: 3.9, Jan. 2018 - Jan. 2020
          </Text>
          <Text>Fiddled with ML, Distributed Systems, and Databases</Text>
        </Box>
        <Box>
          <Text fontSize="2xl">Baruch College, CUNY</Text>
          <Text fontStyle="italic">
            B.A. Mathematics, GPA: 3.94, Jan. 2014 - Jul. 2017
          </Text>
          <Text>
            Did lots of stuff with probability, stats, and numerical analysis
          </Text>
        </Box>
      </Section>
      <Section title="Technologies I Know">
        <Box mb="20px">
          <Text fontSize="2xl">Programming Languages</Text>
          <UnorderedList>
            <ListItem>Python, TypeScript, JavaScript, Java, Rust, Lua</ListItem>
          </UnorderedList>
        </Box>
        <Box mb="20px">
          <Text fontSize="2xl">Databases</Text>
          <UnorderedList>
            <ListItem>PostgreSQL, MySQL, MongoDB, CockroachDB</ListItem>
          </UnorderedList>
        </Box>
        <Box mb="20px">
          <Text fontSize="2xl">Other Technologies</Text>
          <UnorderedList>
            <ListItem>Neovim, Git, Docker, AWS, Celery, RabbitMQ</ListItem>
          </UnorderedList>
        </Box>
      </Section>
    </PageContainer>
  )
}

export default Resume
