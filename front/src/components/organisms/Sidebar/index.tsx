"use client";

import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  ClientOnly,
  Skeleton,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "@/components/ui/color-mode";
import {
  LinkItemProps,
  SidebarContent,
} from "@/components/organisms/Sidebar/SidebarContent";

interface SidebarWithHeaderProps {
  children: ReactNode;
  links: Array<LinkItemProps>;
}

export const SidebarWithHeader: React.FC<SidebarWithHeaderProps> = ({
  children,
  links,
}) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent links={links} />

      <Flex
        ml={60}
        px={4}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Flex align="center" flex="1" minW={0}></Flex>

        <HStack ml={4}>
          <IconButton size="lg" variant="ghost" aria-label="open menu" mr={2} />

          <ClientOnly fallback={<Skeleton boxSize="8" />}>
            <IconButton
              onClick={toggleColorMode}
              variant="outline"
              size="sm"
              mr={2}
              aria-label="Toggle Color Mode"
            >
              {colorMode === "light" ? <LuSun /> : <LuMoon />}
            </IconButton>
          </ClientOnly>
        </HStack>
      </Flex>

      <Box ml={60} p="4">
        {children}
      </Box>
    </Box>
  );
};