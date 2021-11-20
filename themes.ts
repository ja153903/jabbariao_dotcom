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
  colors: {
    polarnight: {
      100: PolarNight.Nord0,
      200: PolarNight.Nord1,
      300: PolarNight.Nord2,
      400: PolarNight.Nord3,
    },
    snowstorm: {
      100: SnowStorm.Nord4,
      200: SnowStorm.Nord5,
      300: SnowStorm.Nord6,
    },
    frost: {
      100: Frost.Nord7,
      200: Frost.Nord8,
      300: Frost.Nord9,
      400: Frost.Nord10,
    },
    aurora: {
      100: Aurora.Nord11,
      200: Aurora.Nord12,
      300: Aurora.Nord13,
      400: Aurora.Nord14,
      500: Aurora.Nord15,
    },
  },
})

export default theme
