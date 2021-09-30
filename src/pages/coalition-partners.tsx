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
import BLMBKImage from '../../static/Images/Partners/BLM_Brooklyn.jpg'
import FICImage from '../../static/Images/Partners/Fair_Internet_Coalition.png'
import GlobalKidsImage from '../../static/Images/Partners/Global_Kids.png'
import OFENYImage from '../../static/Images/Partners/OFENY.jpg'
import Pride&PowerImage from '../../static/Images/Partners/Pride&Power.png'

export default function CoalitionPartners(): JSX.Element {
  return (
    <Layout title='Coalition Partners | Internet for All NYC'>
      <VStack spacing={['64px', '96px']}>
        <Heading fontSize={24} fontWeight={500} textAlign='center'>
          We are a growing coalition of organizations fighting for municipal broadband in New York City.
        </Heading>

        <Wrap spacing={['40px', '96px']} justify='center'>
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
          <Link href='https://tscfis.org'>
            <Image src={FICImage} boxSize={[108, 144]} />
          </Link>
          <Link href='https://www.facebook.com/BlackLivesMatterBK/'>
            <Image src={BLMBKImage} boxSize={[108, 144]} />
          </Link>
          <Link href='https://globalkids.org/'>
            <Image src={GlobalKidsImage} boxSize={[108, 144]} />
          </Link>
          <Link href='https://www.ofeny.org/'>
            <Image src={OFENYImage} boxSize={[108, 144]} />
          </Link>
          <Link href='https://nycpridepower.org/'>
            <Image src={Pride&PowerImage} boxSize={[108, 144]} />
          </Link>
        </Wrap>

        <Text textAlign='center'>
          Are you a part of an organization seeking to become a partner?
          Contact us <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdTWOER4oq31Q3T7aLesYPrOMrU5lEy27zE7RjBYDMJI89T0Q/viewform' variant='body'>here</Link>.
        </Text>
      </VStack>
    </Layout>
  )
}
