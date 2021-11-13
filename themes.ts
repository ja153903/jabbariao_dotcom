import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: '#4C566A',
        color: '#ECEFF4',
      },
    },
  },
  fonts: {
    heading: 'Arvo',
    body: 'Arvo',
  },
})

export default theme
