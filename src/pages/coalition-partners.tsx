import React from 'react'
import {Heading,
  Image,
  Link,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { Layout } from '../Components'
import TechActionImage from '../../static/Images/Partners/NYC_DSA_TechAction.jpg'
import IBEWImage from '../../static/Images/Partners/IBEW.jpg'
import VocalNYImage from '../../static/Images/Partners/VocalNY.jpg'
import MOREImage from '../../static/Images/Partners/MORE.jpg'

export default function CoalitionPartners(): JSX.Element {
  return (
    <Layout title='Coalition Partners | Internet for All NYC'>
      <Heading as='h1' fontSize={24} fontWeight='normal' textAlign='center'>
        We are a growing coalition of organizations fighting for municipal broadband in New York City.
      </Heading>
      
      <Wrap spacing='100px' justify='center' align='center' m={16}>
        <WrapItem>
          <Link href='https://techaction.nyc'>
            <Image src={TechActionImage} h={160} />
          </Link>
        </WrapItem>
        <WrapItem>
          <Link href='https://local3ibew.org'>
            <Image src={IBEWImage} h={144} />
          </Link>
        </WrapItem>
        <WrapItem>
          <Link href='https://www.vocal-ny.org'>
            <Image src={VocalNYImage} h={144} />
          </Link>
        </WrapItem>
        <WrapItem>
          <Link href='https://morecaucusnyc.org'>
            <Image src={MOREImage} h={144} />
          </Link>
        </WrapItem>
      </Wrap>
    </Layout>
  )
}
