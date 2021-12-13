import { Box, Text, Heading } from '@chakra-ui/react'

import type { ResumeItemProps } from '@types'

function ResumeItem({
  title,
  subTitle,
  description,
  isLastItem = false,
}: ResumeItemProps) {
  return (
    <Box mb={isLastItem ? '0' : '20px'} maxW="xl">
      <Heading fontSize="xl">{title}</Heading>
      <Text fontStyle="italic" color="snowstorm.100">
        {subTitle}
      </Text>
      <Text>{description}</Text>
    </Box>
  )
}

export default ResumeItem
