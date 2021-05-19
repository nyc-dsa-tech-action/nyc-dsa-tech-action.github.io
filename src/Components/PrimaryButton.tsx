import React from 'react'
import {
  Box,
  BoxProps,
} from "@chakra-ui/react"
import { ArrowIcon } from './Icons'

export interface PrimaryButtonProps extends BoxProps {
  backgroundHover?: string
}

export const PrimaryButton = ({
    background,
    backgroundHover,
    children,
    color = 'offBlack',
    fontWeight = 700,
    ...props
  }: PrimaryButtonProps): JSX.Element => {
  return (
    <Box position='relative'>
      <Box
        as='button'
        background={background}
        borderRadius={0}
        color={color}
        fontWeight={fontWeight}
        position='relative'
        px='18px'
        py='14px'
        zIndex={1}
        _hover={{backgroundColor: backgroundHover}}
        _active={{transform: 'translate(6px, 6px)'}}
        transition="transform 0.3s ease"
        {...props}
      >
        {children}
        <ArrowIcon boxSize={'36px'} ml='14px' />
      </Box>
      <Box
        background='offWhite'
        border='1px'
        borderColor={background}
        position= 'absolute'
        bottom='-6px'
        right= '-6px'
        height='100%'
        width="100%"
      />
    </Box>
  );
};
