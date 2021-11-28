import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { ListItem, List, Text } from '@chakra-ui/react'

import type {
  BlogPostPreviewProps,
  IMediumArticle,
  WritingProps,
} from '../@types'

import PageContainer from '../components/PageContainer'
import Section from '../components/Section'
import BlogPostPreview from '../components/BlogPostPreview'
import ExternalLink from '../components/ExternalLink'
import StyledLayout from '../components/StyledLayout'

const mediumArticles: Array<IMediumArticle> = [
  {
    url: 'https://javascript.plainenglish.io/resolving-lsps-for-deno-projects-in-neovim-1728583edde9',
    name: 'Resolving LSPs for Deno Projects in Neovim',
    publishedDate: '11-10-2021',
  },
  {
    url: 'https://javascript.plainenglish.io/communicating-between-stores-in-mobx-state-tree-with-react-and-typescript-24d103001b32',
    name: 'Communicating Between Stores in MobX State Tree with React and TypeScript',
    publishedDate: '12-11-2019',
  },
  {
    url: 'https://javascript.plainenglish.io/structuring-react-components-for-easy-imports-bc6e876cf541',
    name: 'Structuring React Components for Easy Imports',
    publishedDate: '12-02-2019',
  },
]

function MediumArticles() {
  return (
    <Section title="Published on Medium">
      <List maxW="xl">
        {mediumArticles.map((article, index) => (
          <ListItem key={`${article.url}-${index}`} mb="10px">
            <StyledLayout layoutType="flex" sx={{ flexDirection: 'column' }}>
              <ExternalLink name={article.name} url={article.url} />
              <Text as="i" color="snowstorm.100">
                Published on {article.publishedDate}
              </Text>
            </StyledLayout>
          </ListItem>
        ))}
      </List>
    </Section>
  )
}

function BlogPreviewSection({ posts }: BlogPostPreviewProps) {
  return (
    <Section title="Miscellaneous Blog Posts">
      <BlogPostPreview posts={posts ?? []} />
    </Section>
  )
}

function Writing({ posts }: WritingProps) {
  return (
    <PageContainer>
      <MediumArticles />
      <BlogPreviewSection posts={posts ?? []} />
    </PageContainer>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('static_files/posts'))

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('static_files/posts', filename)
    )
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0],
    }
  })

  posts.sort((a, b) => {
    const aDate: Date = new Date(a.frontMatter['sort-date'])
    const bDate: Date = new Date(b.frontMatter['sort-date'])

    return bDate.getTime() - aDate.getTime()
  })

  return {
    props: { posts },
  }
}

export default Writing
