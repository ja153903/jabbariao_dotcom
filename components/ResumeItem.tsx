import { Box, Text } from '@chakra-ui/react'

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
      <Text fontSize="2xl">{title}</Text>
      <Text fontStyle="italic">{subTitle}</Text>
      <Text>{description}</Text>
    </Box>
  )
}

export default ResumeItem
