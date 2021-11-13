import { Box, Text, Heading } from '@chakra-ui/react'

interface ResumeItemProps {
  title: string
  subTitle: string
  description: string
  isLastItem?: boolean
}

function ResumeItem({
  title,
  subTitle,
  description,
  isLastItem = false,
}: ResumeItemProps) {
  return (
    <Box mb={isLastItem ? '0' : '20px'}>
      <Heading fontSize="xl">{title}</Heading>
      <Text fontStyle="italic" color="#D8DEE9">
        {subTitle}
      </Text>
      <Text>{description}</Text>
    </Box>
  )
}

export default ResumeItem
