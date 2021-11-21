import { Flex, Text } from '@chakra-ui/react'

function Tags({ tags }: { tags: string[] }) {
  return (
    <Flex direction="row">
      {tags.map((tag) => {
        return <Text key={tag}>#{tag}</Text>
      })}
    </Flex>
  )
}

export default Tags
