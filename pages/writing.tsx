import type { NextPage } from 'next'

import { ListItem, OrderedList, Link, Text } from '@chakra-ui/react'

import PageContainer from '../components/PageContainer'
import Section from '../components/Section'

interface MediumArticle {
  url: string
  name: string
  publishedDate: string
}

const mediumArticles: Array<MediumArticle> = [
  {
    url: 'https://javascript.plainenglish.io/resolving-lsps-for-deno-projects-in-neovim-1728583edde9',
    name: 'Resolving LSPs for Deno Projects in Neovim',
    publishedDate: 'Nov 10, 2021',
  },
  {
    url: 'https://javascript.plainenglish.io/communicating-between-stores-in-mobx-state-tree-with-react-and-typescript-24d103001b32',
    name: 'Communicating Between Stores in MobX State Tree with React and TypeScript',
    publishedDate: 'Dec 11, 2019',
  },
  {
    url: 'https://javascript.plainenglish.io/structuring-react-components-for-easy-imports-bc6e876cf541',
    name: 'Structuring React Components for Easy Imports',
    publishedDate: 'Dec 2, 2019',
  },
]

const Writing: NextPage = () => {
  return (
    <PageContainer>
      <Section title="Medium Articles">
        <OrderedList>
          {mediumArticles.map((article, index) => (
            <ListItem key={`${article.url}-${index}`}>
              <Link href={article.url} isExternal>
                {article.name} (published on {article.publishedDate})
              </Link>
            </ListItem>
          ))}
        </OrderedList>
      </Section>
      <Section title="Misc.">
        <Text size="md">Nothing here yet</Text>
      </Section>
    </PageContainer>
  )
}

export default Writing
