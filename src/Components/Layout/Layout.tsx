import React from 'react'
import {
  Flex,
  ChakraProvider,
  ChakraProviderProps,
} from "@chakra-ui/react"
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({children, theme}: ChakraProviderProps): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Flex minHeight='100vh' direction='column'>
        <Navbar />
        <Flex flex='1' direction='column' px={5}>
          {children}
        </Flex>
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}