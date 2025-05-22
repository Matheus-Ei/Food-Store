import Icon, { IconType } from "@/components/atoms/icon";
import { Box, Flex, FlexProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  children,
  ...rest
}) => (
  <Box as="a" style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
    <Flex
      align="center"
      p="4"
      mx="4"
      gapX={4}
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: "blue.400",
        color: "white",
      }}
      {...rest}
    >
      {icon && <Icon value={icon} />}
      {children}
    </Flex>
  </Box>
);
