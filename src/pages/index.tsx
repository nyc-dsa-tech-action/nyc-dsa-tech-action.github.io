import React from 'react'
import { Accordion,
         ListItem,
         Text,
         Heading,
         Stack,
         UnorderedList,
         Box,
         Center,
         Flex,
         SimpleGrid,
         Image,
         Container
} from "@chakra-ui/react"
import { 
  PrimaryButton,
  Layout
} from '../Components'
import MapImage from '../../static/Images/map.png';

export default function Home(): JSX.Element {
  return (
    <Layout title='Internet for All NYC' padding={[0]}>
      <Center bgColor="purple" p={['24px', '64px']} color="white" w="100%">
        <Flex direction="column" justify="center" maxWidth="1260px" minHeight="50vh">
          <Stack spacing={5} w="90%">
            <Heading fontFamily="Inconsolata" size="md" fontWeight="500">
              Internet in NYC is essential, but expensive, slow and segregated.
            </Heading>
            <Heading fontFamily="Inconsolata" size="md" fontWeight="500">
              The Internet For All coalition is fighting for a publicly owned, fully-unionized municipal broadband provider to make sure every New Yorker can access education, work, and other essential services online
            </Heading>
          </Stack>
          <Flex justifyContent="flex-end" mt="3rem">
            <PrimaryButton
              href="/take-action"
              title="Get Involved"
              background="orange"
              backgroundHover="orangeLight"
              color="offBlack"
            />
          </Flex>
        </Flex>
      </Center>
      <Box bgColor="offWhite" p={['24px', '64px']} py={['36px', '64px']} w="100%" textAlign="center">
        <Container maxWidth="1185px">
          <Heading size="md" fontWeight="500">Internet is essential</Heading>
          <SimpleGrid columns={[1, null, 3]} spacing={[5, 10]} mt={['24px', '64px']}>
            <Box>
              <Heading color="purple" size="2xl" p={2}>79%</Heading>
              <p>of Americans used internet for their last job search</p>
            </Box>
            <Box>
              <Heading color="orange" size="2xl" p={2}>50%</Heading>
              <p>of students say they need internet access to do their homework</p>
            </Box>
            <Box>
              <Heading color="blue" size="2xl" p={2}>86%</Heading>
              <p>of Americans get news from digital devices</p>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="1185px" p={['24px', '64px']} w="100%" textAlign="center">
          <Stack spacing={10}>
            <Heading size="md" fontWeight="500">Internet access is slow, expensive and segregated</Heading>
            <Image src={MapImage} alt="Map of NYC Broadband Data" />
            <Text>Only 46% of households living in poverty have internet access. 30% of Black households and 32% of Hispanic households lack home broadband vs. 20% of White households.</Text>
          </Stack>
        </Container>
      </Box>
      <Center bgColor="purple" p={['24px', '64px']} color="white" w="100%">
        <Stack spacing={5}>
          <Text align="center">Join us in our  campaign to make accessible, affordable public broadband a reality.</Text>
          <Center>
            <PrimaryButton
              title="Take Action"
              href="/take-action"
              background="aqua"
            />
          </Center>
        </Stack>
      </Center>
    </Layout>
  )
}
