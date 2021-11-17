import { Box, Text, Heading } from '@chakra-ui/react'

import type { ResumeItemProps } from '../@types'
import { SnowStorm } from '../themes'

function ResumeItem({
  title,
  subTitle,
  description,
  isLastItem = false,
}: ResumeItemProps) {
  return (
    <Box mb={isLastItem ? '0' : '20px'}>
      <Heading fontSize="xl">{title}</Heading>
      <Text fontStyle="italic" color={SnowStorm.Nord4}>
        {subTitle}
      </Text>
      <Text>{description}</Text>
    </Box>
  )
}

export default ResumeItem
