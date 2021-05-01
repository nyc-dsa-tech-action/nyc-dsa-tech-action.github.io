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
    <Flex alignItems='center' bgColor='darkBlurple' h={75} mb={5} justifyContent='space-between'>
      <LinkBox as={HStack} mx={2}>
        <Image src='../../../Images/Logos/BlackLogo.jpg' boxSize='50px'/>
        <LinkOverlay 
          as={GatsbyLink}
          to='/'
          color='white'
          fontSize={20}
          _hover={{
            textDecoration: 'underline',
            textDecorationColor: 'gold',
          }}
        >
          Internet for All NYC
        </LinkOverlay>
      </LinkBox>
      <HStack spacing={2} mx={2}>
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
