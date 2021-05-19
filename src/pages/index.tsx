import React from 'react'
import {
  Text,
  Heading,
  Stack,
  Box,
  Flex,
  VStack,
  Wrap,
  Link,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from 'gatsby'
import {
  Layout,
  PrimaryButton,
} from '../Components'

export default function Home(): JSX.Element {
  return (
    <Layout title='Internet for All NYC' padding={0}>
        <Flex bgColor="purple" color="white" direction="column"  p={["24px", "64px"]}>
          <Stack spacing="44px">
            <Heading fontSize={["16px", "24px"]} fontWeight="normal">
              Internet in NYC is essential, but expensive, slow and segregated.
            </Heading>
            <Heading fontSize={["16px", "24px"]} fontWeight="normal">
              The Internet For All coalition is fighting for a publicly owned, fully-unionized municipal broadband
              provider to make sure every New Yorker can access education, work, and other essential services online.
            </Heading>
          </Stack>
          <Flex justify="flex-end" mt="44px">
            <Link as={GatsbyLink} to="/take-action">
              <PrimaryButton background="orange" backgroundHover='orangeLight'>
                Get Involved
              </PrimaryButton>
            </Link>
          </Flex>
        </Flex>
      <Box bgColor="offWhite" w="100%"  textAlign="center" p={["24px", "64px"]}>
        <Heading fontSize={24} fontWeight={500}>Internet is essential</Heading>
        <Wrap spacing={["72px", "160px"]} mt={['24px', '64px']} justify="center">
          <VStack spacing={"32px"} w={256}>
            <Heading color="purple" fontSize={64} fontWeight={900}>79%</Heading>
            <Text>of Americans used internet for their last job search</Text>
          </VStack>
          <VStack spacing={"32px"} w={256}>
            <Heading color="orange" fontSize={64} fontWeight={900}>50%</Heading>
            <Text>of students say they need internet access to do their homework</Text>
          </VStack>
          <VStack spacing={"32px"} w={256}>
            <Heading color="blue" fontSize={64} fontWeight={900}>86%</Heading>
            <Text>of Americans get news from digital devices</Text>
          </VStack>
        </Wrap>
      </Box>
      <VStack spacing={["32px", "56px"]} p={["24px", "64px"]} textAlign="center">
        <Heading fontSize="24px" fontWeight="500">Internet access is slow, expensive and segregated</Heading>
        <iframe src="https://new-york-civil-liberties-union.github.io/NYC-Broadband-Map/" width="100%" height="700px" />
        <Text>
          Only 46% of households living in poverty have internet access. 30% of Black households and 32% of Hispanic
          households lack home broadband vs. 20% of White households.
        </Text>
      </VStack>
      <VStack bgColor="purple" spacing="52px" p={["24px", "64px"]} w="100%">
        <Text color="white" align="center">
          Join us in our  campaign to make accessible, affordable public broadband a reality.
        </Text>
        <Link as={GatsbyLink} to="/take-action">
          <PrimaryButton background='aqua'>
            Take Action
          </PrimaryButton>
        </Link>
      </VStack> 
    </Layout>
  )
}
