import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    purple: '#4000B4',
    aqua: '#5CCDC1',
    orange: '#FFB803',
  },
  fonts: {
    'Neus Haas Grotesk Display Pro 55 Roman': 'Neue Haas Grotesk Display Pro 55 Roman',
    'Neus Haas Grotesk Display Pro 75 Bold': 'Neue Haas Grotesk Display Pro 75 Bold'
  },
  components: {
    Link: {
      variants: {
        'nav': {
          color: 'white',
          _hover: {
            textDecoration: 'underline',
            textDecorationColor: 'orange',
          },
          fontFamily: 'Neus Haas Grotesk Display Pro 55 Roman'
        }
      }
    },
  },
})

export default theme
