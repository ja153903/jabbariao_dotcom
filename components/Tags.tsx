import { Flex, Text } from '@chakra-ui/react'

function Tags({ tags }: { tags: string[] }) {
  return (
    <Flex direction="row" justifyContent="center" align="center">
      {tags.map((tag) => {
        return <Text key={tag}>#{tag}</Text>
      })}
    </Flex>
  )
}

export default Tags
