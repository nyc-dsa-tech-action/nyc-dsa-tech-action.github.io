import React from "react"
import { ListItem as ChakraListItem,
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react"

export interface PrinciplesListItemProps {
  title: React.ReactNode
  description: React.ReactNode
}

export const PrinciplesListItem = ({title, description}: PrinciplesListItemProps): JSX.Element => {
  return (
    <ChakraListItem>
      <Text fontSize="36px" fontWeight="500" fontFamily="Inconsolata">
    	{title}
      </Text>
      <Text fontSize="16px" fontFamily="Neue Haas Grotesk Text Pro">
    	{description}
      </Text>
  	</ChakraListItem>
  )
}