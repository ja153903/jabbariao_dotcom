import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Flex } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import type { BlogPageProps, BlogContentProps } from '../../@types'

import PageContainer from '../../components/PageContainer'
import Section from '../../components/Section'
import MDXComponents from '../../components/MDXComponents'
import NavigationLink from '../../components/NavigationLink'
import Tags from '../../components/Tags'

function BackToList() {
  return (
    <Flex align="center" justifyContent="center">
      <NavigationLink href="/writing" label="Back to list" pathname="" />
    </Flex>
  )
}

function BlogContent({ mdxSource, tags }: BlogContentProps) {
  return (
    <Flex direction="column" justifyContent="center" mb="50px">
      <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
      <Tags tags={tags ?? []} />
    </Flex>
  )
}

function BlogPage({ frontMatter: { title, tags }, mdxSource }: BlogPageProps) {
  return (
    <PageContainer>
      <Section title={title}>
        <BlogContent mdxSource={mdxSource} tags={tags} />
        <BackToList />
      </Section>
    </PageContainer>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('static_files/posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join('static_files/posts', `${slug}.mdx`)
  )
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  }
}

export default BlogPage
