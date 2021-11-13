import { Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react'

interface ResumeListItemProps {
  title: string
  items: string[]
  isLast?: boolean
}

function ResumeListItem({ title, items, isLast = false }: ResumeListItemProps) {
  return (
    <Box mb={isLast ? '0px' : '20px'}>
      <Heading fontSize="xl">{title}</Heading>
      <UnorderedList>
        {items.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default ResumeListItem
