import { useState } from 'react'
import { Flex, Button } from '@chakra-ui/react'

import { PaginationProps } from '../@types'
import BlogPostPreview from './BlogPostPreview'

function getItemsPerPage(
  pageSize: number,
  pageItems: any[]
): Map<number, any[]> {
  if (pageItems.length === 0) {
    return new Map()
  }

  const itemsByPage = new Map<number, any[]>()
  let currentPage = 1

  for (let i = 0, currentCount = 0; i < pageItems.length; i++) {
    if (!itemsByPage.has(currentPage)) {
      itemsByPage.set(currentPage, [])
    }

    itemsByPage.get(currentPage)?.push(pageItems[i])
    currentCount++

    if (currentCount > 0 && currentCount % pageSize === 0) {
      currentCount = 0
      currentPage++
    }
  }

  return itemsByPage
}

function Pagination({ pageSize, pageItems }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const itemsPerPage = getItemsPerPage(pageSize, pageItems)
  const noItemsForNextPage =
    (itemsPerPage.get(currentPage + 1)?.length ?? 0) === 0

  return (
    <>
      <BlogPostPreview posts={itemsPerPage.get(currentPage) ?? []} />
      <Flex justify="flex-start" align="center" direction="row">
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          _hover={{ color: 'frost.100' }}
          bg="polarnight.200"
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        <Button
          onClick={() => setCurrentPage(currentPage + 1)}
          _hover={{ color: 'frost.100' }}
          bg="polarnight.200"
          disabled={noItemsForNextPage}
        >
          Next
        </Button>
      </Flex>
    </>
  )
}

export default Pagination
