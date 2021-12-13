import Link from 'next/link'
import { Link as ChakraLink, List, ListItem, Text } from '@chakra-ui/react'

import type { BlogPostPreviewProps } from '@types'
import StyledLayout from './StyledLayout'
import Tags from './Tags'

function BlogPostPreview({ posts }: BlogPostPreviewProps) {
  return (
    <List maxW="xl">
      {posts.map((post) => (
        <ListItem key={post.slug} mb="10px">
          <StyledLayout layoutType="flex" sx={{ flexDirection: 'column' }}>
            <Link href={`/blog/${post.slug}`} passHref>
              <ChakraLink color="frost.100" fontSize="xl">
                {post.frontMatter.title}
              </ChakraLink>
            </Link>
            <Text as="i" color="snowstorm.100" mb={5}>
              Published on {post.frontMatter.date}
            </Text>
            <Tags tags={post.frontMatter.tags ?? []} />
          </StyledLayout>
        </ListItem>
      ))}
    </List>
  )
}

export default BlogPostPreview
