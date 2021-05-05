import React from "react"
import { 
  HStack,
  Image,
  Flex,
  Link,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'

export const Navbar = (): JSX.Element => {
  return (
    <Flex alignItems='center' bgColor='purple' px={16} py={12} justifyContent='space-between'>
      <LinkBox as={HStack}>
        <Image src='../../../Images/Logos/ColorLogo.jpg' boxSize='45px'/>
        <LinkOverlay 
          as={GatsbyLink}
          to='/'
          color='white'
          fontSize={32}
          fontWeight='bold'
          _hover={{
            textDecoration: 'underline',
            textDecorationColor: 'orange',
          }}
        >
          Internet for All NYC
        </LinkOverlay>
      </LinkBox>
      <HStack spacing={6}>
        <Link as={GatsbyLink} to='/principles' variant='nav'>
          Principles
        </Link>
        <Link as={GatsbyLink} to='/stories' variant='nav'>
          Stories
        </Link>
        <Link as={GatsbyLink} to='/research' variant='nav'>
          Research
        </Link>
        <Link as={GatsbyLink} to='/coalition-partners' variant='nav'>
          Coalition Partners
        </Link>
        <Link as={GatsbyLink} to='/take-action' variant='nav'>
          Take Action
        </Link>
      </HStack>
    </Flex>
  )
}
