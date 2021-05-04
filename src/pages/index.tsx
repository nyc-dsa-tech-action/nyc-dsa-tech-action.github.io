import React from 'react'
import { Accordion,
  ListItem,
  Text,
  Stack,
  UnorderedList,
  Box
} from "@chakra-ui/react"
import { 
  PrimaryButton,
  Layout
} from '../Components'

export default function Home(): JSX.Element {
  return (
    <Layout title='Internet for All NYC'>
      <Box bgColor="purple" p={16} color="white" width="100%">
        <Stack spacing={5}>
          <Text fontFamily="Inconsolata">
            Internet in NYC is essential, but expensive, slow and segregated.
          </Text>
          <Text fontFamily="Inconsolata">
            The Internet For All coalition is fighting for a publicly owned, fully-unionized municipal broadband provider to make sure every New Yorker can access education, work, and other essential services online
          </Text>
        </Stack>
        <PrimaryButton href="/take-action" title="Get Involved" />
      </Box>
    </Layout>
  )
}
