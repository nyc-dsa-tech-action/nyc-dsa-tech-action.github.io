import React from "react"
import { Flex, Link } from "@chakra-ui/react"

export default function Navbar (): JSX.Element {
  return (
    <Flex alignItems='center' bgColor='purple.600' h={50} w='100%' justifyContent='space-between'>
        <Link color='white' mx={2}>Internet for All NYC</Link>
        <Flex>
          <Link color='white' mx={2}>Principles</Link>
          <Link color='white' mx={2}>Coalition Partners</Link>
        </Flex>
    </Flex>
  )
}
