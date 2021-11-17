import { extendTheme } from '@chakra-ui/react'

export enum PolarNight {
  Nord0 = '#2E3440',
  Nord1 = '#3B4252',
  Nord2 = '#434C5E',
  Nord3 = '#4C566A',
}

export enum SnowStorm {
  Nord4 = '#D8DEE9',
  Nord5 = '#E5E9F0',
  Nord6 = '#ECEFF4',
}

export enum Frost {
  Nord7 = '#8FBCBB',
  Nord8 = '#88C0D0',
  Nord9 = '#81A1C1',
  Nord10 = '#5E81AC',
}

export enum Aurora {
  Nord11 = '#BF616A',
  Nord12 = '#D08770',
  Nord13 = '#EBCB8B',
  Nord14 = '#A3BE8C',
  Nord15 = '#B48EAD',
}

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: PolarNight.Nord3,
        color: SnowStorm.Nord6,
      },
    },
  },
  fonts: {
    heading: 'Arvo',
    body: 'Arvo',
  },
})

export default theme
