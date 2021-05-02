import React from 'react'
import { Global } from '@emotion/react'

export const Fonts = (): JSX.Element => (
  <Global
    styles={`
      @font-face {
        font-family: 'Neue Haas Grotesk Display Pro';
        src: url('../../../Fonts/NeueHaasDisplay-Roman.eot');
        src:
            url('../../../Fonts/NeueHaasDisplay-Roman.eot?#iefix') format('embedded-opentype'),
            url('../../../Fonts/NeueHaasDisplay-Roman.woff') format('woff'),
            url('../../../Fonts/NeueHaasDisplay-Roman.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: 'Neue Haas Grotesk Display Pro';
        src: url('../../../Fonts/NeueHaasDisplay-Bold.eot');
        src:
            url('../../../Fonts/NeueHaasDisplay-Bold.eot?#iefix') format('embedded-opentype'),
            url('../../../Fonts/NeueHaasDisplay-Bold.woff') format('woff'),
            url('../../../Fonts/NeueHaasDisplay-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
      }
      `
    }
  />
)
