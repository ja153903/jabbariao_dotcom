import { Heading } from '@chakra-ui/react'

import type { TitleLineProps } from '../@types'

function TitleLine({ text }: TitleLineProps) {
  return (
    <Heading fontSize="2xl" color="#B48EAD">
      {text}
    </Heading>
  )
}

function Title() {
  return (
    <>
      <TitleLine text="Jaime" />
      <TitleLine text="Abbariao" />
    </>
  )
}

export default Title
