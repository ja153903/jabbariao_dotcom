import type { NextPage } from 'next'

import { Text, Box, UnorderedList, ListItem } from '@chakra-ui/react'

import PageContainer from '../components/PageContainer'
import Section from '../components/Section'
import ResumeItem from '../components/ResumeItem'

const Resume: NextPage = () => {
  return (
    <PageContainer>
      <Section title="Experience">
        <ResumeItem
          title="BentoBox"
          subTitle="Software Engineer II, Mar. 2021 - Present"
          description="Building technology with React and Django for restaurants to thrive online and in-stores"
        />
        <ResumeItem
          title="E*TRADE"
          subTitle="Software Engineer I, Jul. 2019 - Mar. 2021"
          description="Worked on guided investing and portfolio analytics software in React and Spring"
          isLastItem
        />
      </Section>
      <Section title="Education">
        <ResumeItem
          title="New York University"
          subTitle="M.S. Computer Science, GPA: 3.9, Jan. 2018 - Jan. 2020"
          description="Fiddled with ML, Distributed Systems, and Databases"
        />
        <ResumeItem
          title="Baruch College, CUNY"
          subTitle="B.A. Mathematics, GPA: 3.94, Jan. 2014 - Jul. 2017"
          description="Did lots of stuff related to probability and numerical analysis"
          isLastItem
        />
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
          <Text fontSize="2xl">Libraries and Frameworks</Text>
          <UnorderedList>
            <ListItem>
              React, Redux, MobX, MobX State Tree, Express, Prisma
            </ListItem>
            <ListItem>Django, Flask, FastAPI, SQLAlchemy</ListItem>
            <ListItem>Spring, Hibernate</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text fontSize="2xl">Other Technologies</Text>
          <UnorderedList>
            <ListItem>
              Neovim, Git, Docker, AWS, Celery, Kafka, RabbitMQ
            </ListItem>
          </UnorderedList>
        </Box>
      </Section>
    </PageContainer>
  )
}

export default Resume
