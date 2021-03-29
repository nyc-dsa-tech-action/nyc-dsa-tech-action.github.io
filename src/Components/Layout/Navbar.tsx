import React from "react"
import { Flex, Link, Text } from "@chakra-ui/react"
import { Link as GatsbyLink } from 'gatsby'

export const Navbar = (): JSX.Element => {
  return (
    <Flex alignItems='center' bgColor='purple.600' h={50} w='100%' mb={5} justifyContent='space-between'>
        <Link as={GatsbyLink} to='/' color='white' mx={2} fontSize={20}>
          Internet for All NYC
        </Link>
        <Flex>
          <Link as={GatsbyLink} to='/principles' color='white' mx={2}>
            Principles
          </Link>
          <Link as={GatsbyLink} to='/partners' color='white' mx={2}>
            Coalition Partners
          </Link>
        </Flex>
    </Flex>
  )
}
