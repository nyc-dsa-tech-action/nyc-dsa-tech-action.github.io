import React from 'react'
import { Global } from '@emotion/react'

export const Fonts = (): JSX.Element => (
  <Global
    styles={`
      @font-face {
        font-family: 'Neue Haas Grotesk Display Pro 55 Roman';
        font-style: normal;
        font-weight: 400;
        src: url('../../fonts/NeueHaasDisplayRoman.woff') format('woff');
      }
      @font-face {
        font-family: 'Neue Haas Grotesk Display Pro 75 Bold';
        font-style: normal;
        font-weight: 700;
        src: url('../../fonts/NeueHaasDisplayBold.woff') format('woff') format('woff');
        }
      `
    }
  />
)
