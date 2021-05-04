import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        purple: '#4000B4',
        aqua: '#5CCDC1',
        orange: '#FFB803',
    },
    fonts: {
        'Neue Haas Grotesk Display Pro': 'Neue Haas Grotesk Display Pro',
        'Inconsolata': 'Inconsolata'
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
                    fontFamily: 'Neue Haas Grotesk Display Pro',
                }
            }
        },
    },
})

export default theme
