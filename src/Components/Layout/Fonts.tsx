import React from 'react'
import { Global } from '@emotion/react'

export const Fonts = (): JSX.Element => (
  <Global
    styles={`
      @font-face {
        font-family: 'Karla';
        font-style: normal;
        font-weight: normal;
        src: url('../../../Fonts/karla-v15-latin-regular.eot');
        src:
            url('../../../Fonts/karla-v15-latin-regular.eot?#iefix') format('embedded-opentype'),
            url('../../../Fonts/karla-v15-latin-regular.woff2') format('woff2'),
            url('../../../Fonts/karla-v15-latin-regular.woff') format('woff'),
            url('../../../Fonts/karla-v15-latin-regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Inconsolata';
        font-style: normal;
        font-weight: 500;
        src: url('../../../Fonts/inconsolata-v21-latin-500.eot');
        src:
            url('../../../Fonts/inconsolata-v21-latin-500.eot?#iefix') format('embedded-opentype'),
            url('../../../Fonts/inconsolata-v21-latin-500.woff2') format('woff2'),
            url('../../../Fonts/inconsolata-v21-latin-500.woff') format('woff'),
            url('../../../Fonts/inconsolata-v21-latin-500.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Inconsolata';
        font-style: normal;
        font-weight: 700;
        src: url('../../../Fonts/Inconsolata-Black.eot');
        src:
            url('../../../Fonts/Inconsolata-Black.eot?#iefix') format('embedded-opentype'),
            url('../../../Fonts/Inconsolata-Black.woff2') format('woff2'),
            url('../../../Fonts/Inconsolata-Black.woff') format('woff'),
            url('../../../Fonts/Inconsolata-Black.ttf') format('truetype');
      }
      @font-face {
        font-family: 'HelveticaNeueCyr';
        font-style: normal;
        font-weight: bold;
        src: url('../../../Fonts/HelveticaNeueCyr-Bold.eot');
        src:
            url('../../../Fonts/HelveticaNeueCyr-Bold.eot?#iefix') format('embedded-opentype'),
            url('../../../Fonts/HelveticaNeueCyr-Bold.woff2') format('woff2'),
            url('../../../Fonts/HelveticaNeueCyr-Bold.woff') format('woff'),
            url('../../../Fonts/HelveticaNeueCyr-Bold.ttf') format('truetype');
      }
      `
    }
  />
)
