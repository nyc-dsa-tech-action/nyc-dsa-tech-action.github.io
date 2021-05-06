import React from 'react'
import {
  Flex,
  ChakraProvider,
  ChakraProviderProps,
} from "@chakra-ui/react"
import { Navbar } from './Navbar'
import theme from '../../theme'
import { Helmet } from 'react-helmet'
import { Fonts } from './Fonts'

export interface LayoutProps extends ChakraProviderProps {
  title: string;
  padding: array;
}

export const Layout = ({
    children,
    title,
    padding,
  }: LayoutProps): JSX.Element => {
  return (
    <>
      <Helmet title={title} />
      <ChakraProvider theme={theme}>
        <Fonts />
        <Flex minHeight='100vh' direction='column'>
          <Navbar />
          <Flex flex='1' direction='column' p={padding} align='center'>
            {children}
          </Flex>
        </Flex>
      </ChakraProvider>
    </>
  )
}

Layout.defaultProps = {
  padding: ['24px', '64px'],
}
