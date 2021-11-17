import { Heading } from '@chakra-ui/react'

import type { TitleLineProps } from '../@types'
import { Aurora } from '../themes'

function TitleLine({ text }: TitleLineProps) {
  return (
    <Heading fontSize="2xl" color={Aurora.Nord15}>
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
