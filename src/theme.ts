import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    blue: '#2E70FF',
    purple: '#4000B4',
    aqua: '#5CCDC1',
    orange: '#FFB803',
    orangeLight: '#FFBC35',
    offWhite: '#FAFAFA',
    offBlack: '#222222',
  },
  fonts: {
    body: 'Karla',
    heading: 'Inconsolata',
    'Helvetica': 'HelveticaNeueCyr',
  },
  components: {
    Link: {
      variants: {
        'body': {
          color: 'purple',
          textDecoration: 'underline',
          textDecorationColor: 'purple',
        },
        'navbar': {
          color: 'white',
          _hover: {
            textDecoration: 'underline',
            textDecorationColor: 'orange',
          }
        },
        'navmenu': {
          _hover:{
            textDecoration: 'none',
          },
        }
      }
    },
  }
})

export default theme
