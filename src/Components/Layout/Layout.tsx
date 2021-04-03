import React from 'react'
import {
  Flex,
  ChakraProvider,
  ChakraProviderProps,
} from "@chakra-ui/react"
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import theme from '../../../theme'
import { Helmet } from 'react-helmet'

export interface LayoutProps extends ChakraProviderProps {
  title: string
}

export const Layout = ({
    children,
    title,
  }: LayoutProps): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ChakraProvider theme={theme}>
        <Flex minHeight='100vh' direction='column'>
          <Navbar />
          <Flex flex='1' direction='column' px={5}>
            {children}
          </Flex>
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  )
}
