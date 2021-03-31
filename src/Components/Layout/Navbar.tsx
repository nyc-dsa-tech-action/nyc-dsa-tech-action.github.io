import React from "react"
import { 
  HStack,
  Image,
  Flex,
  Link,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from 'gatsby'

export const Navbar = (): JSX.Element => {
  return (
    <Flex alignItems='center' bgColor='#3200ad' h={75} w='100%' mb={5} justifyContent='space-between'>
      <LinkBox as={HStack}>
        <Image src='../../../Images/Logos/BlackLogo.jpg' boxSize='50px'/>
        <LinkOverlay
          as={GatsbyLink}
          to='/'
          color='white'
          mx={2}
          fontSize={20}
          _hover={{
            textDecoration: 'underline',
            textDecorationColor: '#FFBD59',
            textDecorationThickness: 2,
          }}
        >
          Internet for All NYC
        </LinkOverlay>
      </LinkBox>
      <HStack spacing={2} mx={2}>
        <Link
          as={GatsbyLink}
          to='/principles'
          color='white'
          _hover={{
            textDecoration: 'underline',
            textDecorationColor: '#FFBD59',
          }}
        >
          Principles
        </Link>
        <Link 
          as={GatsbyLink}
          to='/partners'
          color='white'
          _hover={{
            textDecoration: 'underline',
            textDecorationColor: '#FFBD59',
          }}
        >
          Coalition Partners
        </Link>
      </HStack>
    </Flex>
  )
}
