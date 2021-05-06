import React from "react"
import {
  HStack,
  IconButton,
  Image,
  Flex,
  Link,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from '../../../static/Images/logo.png'

export const Navbar = (): JSX.Element => {
  return (
    <Flex alignItems='center' bgColor='purple' px={['24px', '64px']} py={['24px', '48px']} justifyContent='space-between'>
      <LinkBox as={HStack}>
        <Image src={Logo} boxSize='44px'/>
        <LinkOverlay 
          as={GatsbyLink}
          to='/'
          color='white'
          fontFamily='Helvetica'
          fontSize={[24, 32]}
          fontWeight='bold'
          _hover={{
            textDecoration: 'underline',
            textDecorationColor: 'orange',
          }}
        >
          Internet for All
        </LinkOverlay>
      </LinkBox>
      <HStack spacing='24px' display={['none', 'block']}>
        <Link as={GatsbyLink} to='/principles' variant='navbar'>
          Principles
        </Link>
        <Link as={GatsbyLink} to='/coalition-partners' variant='navbar'>
          Coalition Partners
        </Link>
        <Link as={GatsbyLink} to='/take-action' variant='navbar'>
          Take Action
        </Link>
      </HStack>
      <Menu>
        <MenuButton backgroundColor='purple'
          as={IconButton}
          icon={<HamburgerIcon color='white'/>}
          display={['block', 'none']}
        />
        <MenuList display={['block', 'none']} zIndex={2}>
          <Link as={GatsbyLink} to='/principles' variant='navmenu'>
            <MenuItem>
              Principles
            </MenuItem>
          </Link>
          <Link as={GatsbyLink} to='/coalition-partners' variant='navmenu'>
            <MenuItem>
              Coalition Partners
            </MenuItem>
          </Link>
          <Link as={GatsbyLink} to='/take-action' variant='navmenu'>
            <MenuItem>
              Take Action
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  )
}
