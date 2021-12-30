import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Flex } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import type { BlogPageProps, BlogContentProps } from '../../types'

import PageContainer from '@components/PageContainer'
import Section from '@components/Section'
import MDXComponents from '@components/MDXComponents'
import NavigationLink from '@components/NavigationLink'
import Meta from '@components/Meta'

function BackToList() {
  return (
    <Flex align="center" justifyContent="center">
      <NavigationLink href="/writing" label="Back to list" pathname="" />
    </Flex>
  )
}

function BlogContent({ mdxSource }: BlogContentProps) {
  return (
    <Flex direction="column" justifyContent="center" mb="50px" maxW="4xl">
      <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
    </Flex>
  )
}

function BlogPage({
  frontMatter: { title, description },
  mdxSource,
}: BlogPageProps) {
  return (
    <>
      <Meta
        title={title ?? 'Some Post'}
        description={description ?? 'Some description'}
      />
      <PageContainer>
        <Section title={title}>
          <BlogContent mdxSource={mdxSource} />
          <BackToList />
        </Section>
      </PageContainer>
    </>
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
