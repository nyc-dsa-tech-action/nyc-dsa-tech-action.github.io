import React from 'react'
import {Heading,
  Image,
  Link,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { Layout } from '../Components'

export default function Principles(): JSX.Element {
  return (
    <Layout title='Stories | Internet for All NYC'>
      <Heading as='h1' size='lg' mb={8} textAlign='center'>
        Lack of Broadband Access has a Profound Effect on New Yorker's Lives.
      </Heading>
      
      <Wrap spacing={8} justify='center'>
        <WrapItem>
          Some Stories here.
        </WrapItem>
      </Wrap>
    </Layout>
  )
}
