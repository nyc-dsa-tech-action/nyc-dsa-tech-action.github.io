import React, { useEffect } from 'react'
import { Layout } from '../Components'

export default function Principles(): JSX.Element {
  useEffect(() => {
    // Create HTML script element loading Action Network form
    const script = document.createElement('script')
    script.src = 'https://actionnetwork.org/widgets/v3/form/public-broadband-volunteer?format=js&source=widget'
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
      <div id='can-form-area-public-broadband-volunteer' style={{width: '65%'}} />  
    </Layout>
  )
}
