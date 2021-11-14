import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import PageContainer from '../../components/PageContainer'
import Section from '../../components/Section'

interface FrontMatter {
  title: string
}

interface BlogPageProps {
  frontMatter: FrontMatter
  mdxSource: any
}

function BlogPage({ frontMatter: { title }, mdxSource }: BlogPageProps) {
  return (
    <PageContainer>
      <Section title={title}>
        <MDXRemote {...mdxSource} />
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