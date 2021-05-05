import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    purple: '#4000B4',
    aqua: '#5CCDC1',
    orange: '#FFB803',
  },
  fonts: {
    body: 'Neue Haas Grotesk Display Pro',
    heading: 'Inconsolata'
  },
  components: {
    Link: {
      variants: {
        'nav': {
          color: 'white',
          _hover: {
            textDecoration: 'underline',
            textDecorationColor: 'orange',
          }
        }
      }
    },
  },
})

export default theme
