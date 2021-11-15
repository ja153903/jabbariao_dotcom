import PageContainer from '../components/PageContainer'
import Section from '../components/Section'
import ResumeItem from '../components/ResumeItem'
import ResumeListItem from '../components/ResumeListItem'

function Resume() {
  return (
    <PageContainer>
      <Section title="Experience">
        <ResumeItem
          title="BentoBox"
          subTitle="Software Engineer II, Mar. 2021 - Present"
          description="Building technology with React and Django to enable restaurants to thrive online"
        />
        <ResumeItem
          title="E*TRADE"
          subTitle="Software Engineer II, Jul. 2019 - Mar. 2021"
          description="Worked on guided investing and portfolio analytics software in React and Spring"
          isLastItem
        />
      </Section>
      <Section title="Education">
        <ResumeItem
          title="New York University"
          subTitle="M.S. Computer Science, Jan. 2018 - Jan. 2020"
          description="Fiddled with ML, Distributed Systems, and Databases"
        />
        <ResumeItem
          title="Baruch College, CUNY"
          subTitle="B.A. Mathematics, Jan. 2014 - Jul. 2017"
          description="Did lots of stuff related to probability and numerical analysis"
          isLastItem
        />
      </Section>
      <Section title="Technologies I Know">
        <ResumeListItem
          title="Programming Languages"
          items={['Python, TypeScript, JavaScript', 'Java, Rust, Lua, C']}
        />
        <ResumeListItem
          title="Databases"
          items={['Relational: PostgreSQL, MySQL', 'NoSQL: MongoDB']}
        />
        <ResumeListItem
          title="Libraries and Frameworks"
          items={[
            'React, Redux, MobX, Express, Prisma',
            'Next.js, Material UI, Chakra UI, Apollo GraphQL',
            'Django, Flask, FastAPI, SQLAlchemy',
            'Spring, Hibernate',
          ]}
        />
        <ResumeListItem
          title="Other Technologies"
          items={['Neovim, Git, Docker, AWS, Celery, Kafka, RabbitMQ']}
          isLast
        />
      </Section>
    </PageContainer>
  )
}

export default Resume
