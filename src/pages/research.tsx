import React from 'react'
import { Layout } from '../Components'
import { AspectRatio, Heading } from '@chakra-ui/react'

export default function Principles(): JSX.Element {
  return (
    <Layout title='Research | Internet for All NYC'>
      <Heading fontSize={24} fontWeight={500} textAlign='center' pb={{base: '18px', md: '36px'}}>
        The case for municpal broadband is strong.
      </Heading>
      <AspectRatio w={{base:'75%', md:'50%'}} ratio={{base: 1/2, lg: 1}}>
        <iframe src='../../REPORT-2021-06-14.pdf' />
      </AspectRatio>
    </Layout>
  )
}
