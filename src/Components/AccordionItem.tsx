import React from "react"
import { AccordionItem as ChakraAccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Flex,
    Heading,
} from "@chakra-ui/react"

export interface AccordionItemProps {
  heading: React.ReactNode
  children: React.ReactNode
}

export const AccordionItem = ({heading, children}: AccordionItemProps): JSX.Element => {
  return (
    <ChakraAccordionItem>
      <Heading >
        <AccordionButton>
          <Flex flex='1' textAlign="left">
           {heading}
          </Flex>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
    <AccordionPanel>
      {children}
    </AccordionPanel>
  </ChakraAccordionItem>
  )
}
