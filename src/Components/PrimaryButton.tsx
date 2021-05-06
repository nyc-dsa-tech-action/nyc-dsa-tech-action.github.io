import React from 'react'
import { Link, Box, Button } from "@chakra-ui/react"
import { Link as GatsbyLink } from 'gatsby'
import { createIcon } from '@chakra-ui/icons'
//import ArrowIcon from './ArrowIcon.js';

const ArrowIcon = createIcon({
   displayName: "ArrowIcon",
   viewBox: "0 0 37 16",
   d: "M36.7071 8.70711C37.0976 8.31658 37.0976 7.68342 36.7071 7.29289L30.3431 0.928932C29.9526 0.538408 29.3195 0.538408 28.9289 0.928932C28.5384 1.31946 28.5384 1.95262 28.9289 2.34315L34.5858 8L28.9289 13.6569C28.5384 14.0474 28.5384 14.6805 28.9289 15.0711C29.3195 15.4616 29.9526 15.4616 30.3431 15.0711L36.7071 8.70711ZM0 9H36V7H0V9Z"
})

export interface PrimaryButtonProps {
  title: string;
  href: string;
  background: string;
  backgroundHover: string;
  color: string;
}

export const PrimaryButton = ({href, title, background, backgroundHover, color}: PrimaryButtonProps): JSX.Element => {
  return (
    <Link as={GatsbyLink} to={href} position="relative" display="inline-block">
      <Box
        as="button"
        variant="solid"
        background={background}
        color={color}
        borderRadius="0"
        zIndex="1"
        padding="10px 18px"
        position="relative"
        minWidth="159px"
        fontFamily="Karla"
        fontWeight="700"
        transition="transform 0.3s ease"
        _hover={{ backgroundColor: backgroundHover }}
        _active={{ transform: 'translate(.3rem, .3rem)' }}
      >
        {title}
        <ArrowIcon boxSize="2em" ml="0.8em" />
      </Box>
        <div
          style={{
            position: 'absolute',
            bottom: '-.3rem',
            right: '-.3rem',
            background: 'white',
            width: '100%',
            height: '100%',
            border: `1px solid ${background}`,
            zIndex: 0
          }}
        />
    </Link>
  );
};
