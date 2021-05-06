import React, { useEffect } from 'react'
import { Layout } from '../Components'
import { Box } from '@chakra-ui/react'

export default function TakeAction(): JSX.Element {
  useEffect(() => {
    // Create HTML script element loading Action Network form
    const script = document.createElement('script')
    script.src = 'https://actionnetwork.org/widgets/v3/event/internet-for-all-nyc-campaign-launch-2?format=js&source=widget'
    script.async = true;
    document.body.appendChild(script);

    // Remove script after effect finishes
    return () => {
      document.body.removeChild(script);
    }
  });

  return (
    <Layout title='Take Action | Internet for All NYC'>
      <link href='https://actionnetwork.org/css/style-embed-v3.css' rel='stylesheet' type='text/css' />
      <Box id='can-event-area-internet-for-all-nyc-campaign-launch-2' w={['100%', '75%', '50%']} />  
    </Layout>
  )
}
