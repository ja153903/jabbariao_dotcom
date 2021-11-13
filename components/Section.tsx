import { Heading, Box } from '@chakra-ui/react'

interface SectionProps {
  title: string
  children: React.ReactNode
}

function Section({ children, title }: SectionProps) {
  return (
    <Box mb="50">
      <Heading size="lg" marginBottom="10px" color="#B48EAD">
        {title}
      </Heading>
      {children}
    </Box>
  )
}

export default Section
