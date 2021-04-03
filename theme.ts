import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    darkBlurple: '#3200AD',
    teal: '#7CC9BF',
    gold: '#7CC9BF',
  },
  components: {
    Link: {
      variants: {
        'nav': {
          color: 'white',
          _hover: {
            textDecoration: 'underline',
            textDecorationColor: 'gold',
          }
        }
      }
    },
  },
})

export default theme
