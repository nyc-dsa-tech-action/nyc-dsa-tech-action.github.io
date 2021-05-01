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
    <Layout title='Research | Internet for All NYC'>
      <Heading as='h1' size='lg' mb={8} textAlign='center'>
        The Case for Municipal Broadband is Strong.
      </Heading>
      
      <Wrap spacing={8} justify='center'>
        <WrapItem>
          <Link href='../../Downloads/TAWG-FTTP-REPORT-CIRCULATION-DRAFT-2021-04-19.pdf'  download>
            Download Our Report
          </Link>
        </WrapItem>
      </Wrap>
    </Layout>
  )
}
