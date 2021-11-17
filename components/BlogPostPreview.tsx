import Link from 'next/link'
import { Link as ChakraLink, OrderedList, ListItem } from '@chakra-ui/react'

import type { BlogPostPreviewProps } from '../@types'
import { Frost } from '../themes'

function BlogPostPreview({ posts }: BlogPostPreviewProps) {
  return (
    <OrderedList>
      {posts.map((post) => (
        <ListItem key={post.slug}>
          <Link href={`/blog/${post.slug}`} passHref>
            <ChakraLink _hover={{ color: Frost.Nord7 }}>
              {post.frontMatter.title} ({post.frontMatter.date})
            </ChakraLink>
          </Link>
        </ListItem>
      ))}
    </OrderedList>
  )
}

export default BlogPostPreview
