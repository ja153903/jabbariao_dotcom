import { Flex, Box } from '@chakra-ui/react'

function Tags({ tags }: { tags: string[] }) {
  return (
    <Flex direction="row" wrap="wrap" sx={{ columnGap: '10px' }}>
      {tags.map((tag) => {
        return <Box key={tag}>#{tag}</Box>
      })}
    </Flex>
  )
}

export default Tags
