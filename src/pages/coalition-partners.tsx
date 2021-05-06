import React from 'react'
import {Heading,
  Image,
  Link,
  Text,
  Wrap,
  VStack,
} from "@chakra-ui/react"
import { Layout } from '../Components'
import TechActionImage from '../../static/Images/Partners/NYC_DSA_TechAction.jpg'
import IBEWImage from '../../static/Images/Partners/IBEW.jpg'
import VocalNYImage from '../../static/Images/Partners/VocalNY.jpg'
import MOREImage from '../../static/Images/Partners/MORE.jpg'

export default function CoalitionPartners(): JSX.Element {
  return (
    <Layout title='Coalition Partners | Internet for All NYC'>
      <VStack spacing={['64px', '96px']}>
        <Heading fontSize={24} fontWeight={500} textAlign='center'>
          We are a growing coalition of organizations fighting for municipal broadband in New York City.
        </Heading>
        
        <Wrap spacing={['35px', '100px']} justify='center'>
          <Link href='https://techaction.nyc'>
            <Image src={TechActionImage} boxSize={[108, 144]} />
          </Link>
          <Link href='https://local3ibew.org'>
            <Image src={IBEWImage} boxSize={[108, 144]} />
          </Link>
          <Link href='https://www.vocal-ny.org'>
            <Image src={VocalNYImage} boxSize={[108, 144]} />
          </Link>
          <Link href='https://morecaucusnyc.org'>
            <Image src={MOREImage} boxSize={[108, 144]} />
          </Link>
        </Wrap>

        <Text textAlign='center'>
          Are you a part of an organization seeking to become a partner? Contact us <Link variant='body'>here</Link>.
        </Text>
      </VStack>
    </Layout>
  )
}
