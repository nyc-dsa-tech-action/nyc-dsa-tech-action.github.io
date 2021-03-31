import React from 'react'
import { Accordion,
  ListItem,
  Text,
  Stack,
  UnorderedList,
} from "@chakra-ui/react"
import { 
  AccordionItem,
  Layout
} from '../Components'

export default function Home(): JSX.Element {
  return (
    <Layout children={
      <Stack spacing={5}>
        <Text>
          With the onset of the COVID-19 crisis, internet access has become even more critical to New Yorkers' lives in
          finding employment, accessing government services, and connecting with loved ones. Internet access in New York
          City, however, remains expensive and slow, and barriers to access fall disproportionately along lines of race,
          age, disability, immigration status, and economic status.
        </Text>
        <Text>
          To achieve truly equitable Internet access for our communities and ensure that all New Yorkers have the resources
          needed to recover from our current crisis, we cannot allow New York City to continue subsidizing the same
          union-busting corporations who have failed time and again to provide functional, reliable, equitable, and
          inexpensive internet to all New Yorkers. Instead of private Internet monopolies,
          <span style={{fontWeight: 'bold'}}> we need a municipal broadband network in NYC now!</span>
        </Text>

        <Accordion allowToggle allowMultiple>
          <AccordionItem 
            heading={'Internet is essential'}
            children={
              <UnorderedList>
                <ListItem>79% of people used the internet for their last job search.</ListItem>
                <ListItem>Almost 50% of students say they get assignments that require the internet almost daily.</ListItem>
                <ListItem>86% of Americans gets news from digital devices.</ListItem>
              </UnorderedList>
            }
          />
          <AccordionItem 
            heading={'Internet service in NYC is expensive, slow, and segregated'}
            children={
              <UnorderedList>
                <ListItem>
                  New Yorkers pay some of the highest fees relative to internet speed amongst big cities worldwide.
                </ListItem>
                <ListItem>
                  46% of NYC households living in poverty do not have broadband at home.
                </ListItem>
                <ListItem>
                  30% of Black households and 32% of Hispanic households lack home broadband vs. 20% of White households.
                </ListItem>
              </UnorderedList>
            }
          />
          <AccordionItem 
            heading={'Private Internet Service Providers (ISPs) don\'t act in the public interest'}
            children={
              <UnorderedList>
                <ListItem>
                  Private ISPs like Spectrum don’t treat their workers well: IBEW Local 3 Spectrum workers have been on strike
                  for four years.
                </ListItem>
                <ListItem>
                  Nor their customers: in 2018, New York State fined Spectrum $174 million+ for defrauding New Yorkers.
                </ListItem>
                <ListItem>
                  Private providers can sell your web browsing history, device location information, and other sensitive data
                  to third parties – a municipal network would explicitly prohibit such practices.
                </ListItem>
              </UnorderedList>
            }
          />
          <AccordionItem 
            heading={'A NYC municipal broadband network will be better than our current patchwork of private ISPs'}
            children={
              <UnorderedList>
                <ListItem>
                  Nationwide, municipal broadband networks have proven to be faster, more affordable, and more transparent
                  than private ISPs.
                </ListItem>
                <ListItem>
                  Unlike private ISPs, a municipal network will deliver fiber-to-the-home connectivity to every New Yorker
                  regardless of ability to pay.
                </ListItem>
                <ListItem>
                  A municipal network will be democratically run and 100% staffed by local union labor.
                </ListItem>
              </UnorderedList>
            }
          />
          <AccordionItem 
            heading={'NYC has the resources needed to build a municipal broadband network'}
            children={
              <UnorderedList>
                <ListItem>
                  We have the existing infrastructure: thousands of miles of free conduit in the Bronx and Manhattan,
                  thousands of City owned buildings with fiber connectivity, multiple existing municipal networks, and many
                  thousands of available utility poles are just a portion of the infrastructure available to the City.
                </ListItem>
                <ListItem>
                  We have the people power: experienced IBEW Local 3 workers ready to hit the ground running and multiple City
                  agencies and employees with expertise in network and call-center operations and more.
                </ListItem>
                <ListItem>
                  We have the money: In the short term, the City is already spending big and giving away infrastructure to
                  facilitate network expansion by private ISP’s – this makes sense where it addresses immediate connectivity
                  needs but is not the long-term solution. In the medium to long term, funding may be supported by subscriber
                  fees, state and federal funding and some borrowing. Targeted ISP taxes, low-cost infrastructure buyouts, and
                  additional state and local legislation will all help to drive down costs for the municipal network.
                </ListItem>
              </UnorderedList>
            }
          />
        </Accordion>
      </Stack>
    } />
  )
}
