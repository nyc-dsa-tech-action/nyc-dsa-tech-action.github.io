import React from 'react'
import {
  Heading,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react"
import { 
  BrowserIcon,
  BuildingIcon,
  Layout,
  TradeIcon,
  WifiIcon,
} from '../Components'

export default function Principles(): JSX.Element {
  return (
    <Layout title='Principles | Internet for All NYC'>
      <List spacing='72px'>
        <ListItem>
          <Stack spacing={['18px', '36px']} direction={['column', 'row']} align='center'>
            <WifiIcon boxSize={['96px', '108px']} />
            <Stack spacing='18px'>
              <Heading fontSize={36} fontWeight={500} textAlign={['center', 'left']}>
                High-speed public broadband should be universally available
              </Heading>
              <Text textAlign={['center', 'left']}>
                In the 21st century, internet is a necessity and a right. The public, non-profit utility service we
                envision will serve every person and business living in NYC, regardless of immigration status or
                ability to pay. Rates will be democratically set and low-cost, and each household should be supplied
                with wireless routers for free on fixed replacement plans.
              </Text>
            </Stack>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack spacing={['18px', '36px']} direction={['column', 'row']} align='center'>
            <TradeIcon boxSize={['96px', '108px']} />
            <Stack spacing='18px'>
              <Heading fontSize={36} fontWeight={500} textAlign={['center', 'left']}>
                A public ISP should be locally staffed and unionized
              </Heading>
              <Text textAlign={['center', 'left']}>
                High-quality, high-speed fiber broadband should be built and staffed by a fully unionized NYC-based
                public entity, with democratic controls to ensure it is always acting in the public interest.
              </Text>
              <Text textAlign={['center', 'left']}>
                A highly trained, robust union workforce will be responsible for customer service and maintenance,
                including 24/7 local support and quick, conveniently scheduled service visits when needed.
              </Text>
            </Stack>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack spacing={['18px', '36px']} direction={['column', 'row']} align='center'>
            <BrowserIcon boxSize={['96px', '108px']} />
            <Stack spacing='18px'>
              <Heading fontSize={36} fontWeight={500} textAlign={['center', 'left']}>
                Data privacy must be paramount
              </Heading>
              <Text textAlign={['center', 'left']}>
                The broadband entity should collect as little information as necessary, be transparent about what
                information is collected, store the information securely, and maintain confidentiality between
                individuals and the broadband entity. New Yorkers must be able to determine how their data is or is not used.
              </Text>
            </Stack>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack spacing={['18px', '36px']} direction={['column', 'row']} align='center'>
            <BuildingIcon boxSize={['96px', '108px']} />
            <Stack spacing='18px'>
              <Heading fontSize={36} fontWeight={500} textAlign={['center', 'left']}>
                Invest in infrastructure and workers to reap the benefits now and in the future
              </Heading>
              <Text textAlign={['center', 'left']}>
                Last mile fiber is the only future-proof internet service delivery technology that can consistently
                permit high bandwidth activities by multiple users. By investing in universal fiber to the home
                infrastructure today, the City can equitably and efficiently bridge the digital divide, now and into
                the future. The expansion of access and increased technological capabilities permitted by fiber to the
                home will also have educational, health and significant economic benefits that will flow to all New
                Yorkers while saving them and the City money. Ongoing network investment, upgrades, and attentive
                customer service will ensure a robust union staff that maintains a high level of service via durable,
                climate resistant systems - public safety, and the well-being of all New Yorkers demands it.
              </Text>
            </Stack>
          </Stack>
        </ListItem>
      </List>
    </Layout>
  )
}
