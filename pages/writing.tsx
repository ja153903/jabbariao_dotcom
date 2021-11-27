import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { ListItem, OrderedList, Link } from '@chakra-ui/react'

import type {
  BlogPostPreviewProps,
  IMediumArticle,
  WritingProps,
} from '../@types'

import PageContainer from '../components/PageContainer'
import Section from '../components/Section'
import BlogPostPreview from '../components/BlogPostPreview'

const mediumArticles: Array<IMediumArticle> = [
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

function MediumArticles() {
  return (
    <Section title="Medium Articles">
      <OrderedList maxW="xl">
        {mediumArticles.map((article, index) => (
          <ListItem key={`${article.url}-${index}`}>
            <Link href={article.url} isExternal _hover={{ color: 'frost.100' }}>
              {article.name} (published on {article.publishedDate})
            </Link>
          </ListItem>
        ))}
      </OrderedList>
    </Section>
  )
}

function BlogPreviewSection({ posts }: BlogPostPreviewProps) {
  return (
    <Section title="Other Pieces">
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
    const aDate: any = new Date(a.frontMatter['sort-date'])
    const bDate: any = new Date(b.frontMatter['sort-date'])

    return bDate - aDate
  })

  return {
    props: { posts },
  }
}

export default Writing
