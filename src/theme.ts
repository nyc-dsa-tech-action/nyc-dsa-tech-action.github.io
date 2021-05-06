import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    purple: '#4000B4',
    aqua: '#5CCDC1',
    orange: '#FFB803',
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
