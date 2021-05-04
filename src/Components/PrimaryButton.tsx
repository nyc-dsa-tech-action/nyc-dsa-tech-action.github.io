import React from 'react'
import { Link, Button } from "@chakra-ui/react"
import { Link as GatsbyLink } from 'gatsby'

export interface PrimaryButtonProps {
  title: string;
  href: string;
}

export const PrimaryButton = ({href, title}: PrimaryButtonProps): JSX.Element => {
  return (
    <Link as={GatsbyLink} to={href}>
      <Button variant="solid">
        {title}
      </Button>
    </Link>
  );
};
