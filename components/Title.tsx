import { Text } from '@chakra-ui/react'

interface TitleLineProps {
  text: string
  fontFamily: string
}

function TitleLine({ text, fontFamily }: TitleLineProps) {
  return (
    <Text fontFamily={fontFamily} fontSize="2xl">
      {text}
    </Text>
  )
}

function Title() {
  const fontFamily = 'Roboto Mono'

  return (
    <>
      <TitleLine text="JAI." fontFamily={fontFamily} />
      <TitleLine text="ABB." fontFamily={fontFamily} />
    </>
  )
}

export default Title
