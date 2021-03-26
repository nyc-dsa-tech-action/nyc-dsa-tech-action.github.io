import React from 'react'
import { Text } from "@chakra-ui/react"
import Navbar from '../Components/Navbar'

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <Text m={5}>
        With the onset of the COVID-19 crisis, internet access has become even more critical to New Yorkers' lives in
        finding employment, accessing government services, and connecting with loved ones. Internet access in New York
        City, however, remains expensive and slow, and barriers to access fall disproportionately along lines of race,
        age, disability, immigration status, and economic status.
      </Text>
      <Text m={5}>
        To achieve truly equitable Internet access for our communities and ensure that all New Yorkers have the resources
        needed to recover from our current crisis, we cannot allow New York City to continue subsidizing the same
        union-busting corporations who have failed time and again to provide functional, reliable, equitable, and
        inexpensive internet to all New Yorkers. Instead of private Internet monopolies,
        <span style={{fontWeight: 'bold'}}> we need a municipal broadband network in NYC now!</span>
      </Text>
    </>
  )
}
