import React from 'react'
import {Heading, 
  ListItem,
  UnorderedList,
} from "@chakra-ui/react"
import { Layout } from '../Components'

export default function Principles(): JSX.Element {
  return (
    <Layout children={
      <>
        <Heading as='h1' size='lg' mb={5}>
          The following are the principles we believe any NYC municipal broadband network must abide by:
        </Heading>

        <UnorderedList spacing={5}>
          <ListItem>
            High quality, high speed fiber broadband should be built and staffed by a fully unionized NYC-based public entity,
            with democratic controls to ensure it is always acting in the public interest.
          </ListItem>
          <ListItem>
            Broadband should be universally available - every person and business living in NYC, regardless of status, should
            have broadband.
          </ListItem>
          <ListItem>
            This public, non-profit utility service will be available regardless of ability to pay. Rates will be 
            democratically set and low-cost.
          </ListItem>
          <ListItem>
            Each household should be supplied with wireless routers for free on fixed replacement plans.
          </ListItem>
          <ListItem>
            Data privacy must be paramount - the broadband entity should collect as little information as necessary, be
            transparent about what information is collected, store the information securely, and maintain confidentiality between individuals and the broadband entity.
          </ListItem>
          <ListItem>
            New Yorkers must be able to determine how their data is or is not used.
          </ListItem>
          <ListItem>
            A highly trained, robust union workforce will be responsible for customer service and maintenance, including 24/7
            local support and quick, conveniently scheduled service visits when needed.
          </ListItem>
          <ListItem>
            Existing network infrastructure will be retrofitted to ensure longevity, and new infrastructure will be built with
            environmental impacts and best practices in mind.
          </ListItem>
        </UnorderedList>
      </>
    } />
  )
}
