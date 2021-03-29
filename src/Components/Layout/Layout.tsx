import React from 'react'
import {ChakraProvider,
  ChakraProviderProps,
} from "@chakra-ui/react"
import { Navbar } from './Navbar'

export const Layout = ({children, theme}: ChakraProviderProps): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {children}
    </ChakraProvider>
  )
}