import { Text } from '@chakra-ui/react'

interface TitleLineProps {
  text: string
  fontFamily: string
}

function TitleLine({ text, fontFamily }: TitleLineProps) {
  return (
    <Text fontFamily={fontFamily} fontSize="xl" color="#8FBCBB">
      {text}
    </Text>
  )
}

function Title() {
  const fontFamily = 'Arvo'

  return (
    <>
      <TitleLine text="Jaime" fontFamily={fontFamily} />
      <TitleLine text="Abbariao" fontFamily={fontFamily} />
    </>
  )
}

export default Title
