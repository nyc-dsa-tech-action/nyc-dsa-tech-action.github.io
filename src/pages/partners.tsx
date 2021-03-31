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
    <Layout children={
      <>
        <Heading as='h1' size='lg' mb={8} textAlign='center'>
          We are a growing coalition of organizations fighting for municipal broadband in New York City.
        </Heading>
        
        <Wrap spacing={8} justify='center'>
          <WrapItem>
            <Link href='https://techaction.nyc'>
              <Image src='../../Images/Partners/NYC_DSA_TechAction.jpg' boxSize='200px' />
            </Link>
          </WrapItem>
          <WrapItem>
            <Link href='https://local3ibew.org'>
              <Image src='../../Images/Partners/IBEW.jpg' boxSize='200px' />
            </Link>
          </WrapItem>
          <WrapItem>
            <Link href='https://www.vocal-ny.org'>
              <Image src='../../Images/Partners/VocalNY.jpg' boxSize='200px' />
            </Link>
          </WrapItem>
        </Wrap>
      </>
    } />
  )
}
