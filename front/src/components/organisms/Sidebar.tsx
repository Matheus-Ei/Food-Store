"use client";

import React, { ReactNode } from "react";
import {
  Avatar,
  Box,
  AvatarGroup,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Portal,
  Text,
  VStack,
  Input,
  ClientOnly,
  Skeleton,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Drawer } from "@chakra-ui/react";
import { Menu } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "@/components/ui/color-mode";
import Icon, { IconType } from "@/components/atoms/icon";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

interface SidebarContentProps extends BoxProps {
  onClose?: () => void;
  links: Array<LinkItemProps>;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
  onClose,
  links,
  ...rest
}) => (
  <Box
    display="flex"
    flexDirection="column"
    transition="0.3s ease"
    bg={useColorModeValue("white", "gray.900")}
    borderRightWidth="1px"
    borderRightColor={useColorModeValue("gray.200", "gray.700")}
    w={{ base: "full", md: 60 }}
    pos="fixed"
    h="full"
    {...rest}
  >
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>

      <CloseButton display={{ base: "none", md: "none" }} onClick={onClose} />
    </Flex>

    <Box flex="1">
      {links.map((link) => (
        <NavItem key={link.name} icon={link.icon} style={{ height: "30px" }} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  </Box>
);

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ icon, children, ...rest }) => (
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

interface SidebarWithHeaderProps {
  children: ReactNode;
  links: Array<LinkItemProps>;
}

const SidebarWithHeader: React.FC<SidebarWithHeaderProps> = ({
  children,
  links,
}) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent links={links} display={{ base: "none", md: "block" }} />

      <Drawer.Root>
        <Drawer.Trigger asChild>
          <Box
            pos="fixed"
            top={20}
            right={5}
            zIndex="overlay"
            marginTop="10px"
            display={{ base: "flex", md: "none" }}
          >
            <Icon value={{name: 'CiMenuBurger', library: 'ci'}}/>
          </Box>
        </Drawer.Trigger>

        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <SidebarContent links={links} onClose={() => {}} />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>

      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Flex align="center" flex="1" minW={0}>
          <Text
            display={{ base: "flex", md: "none" }}
            fontSize="2xl"
            fontFamily="monospace"
            fontWeight="bold"
            mr={4}
            whiteSpace="nowrap"
          >
            Logo
          </Text>

          <Flex
            align="center"
            bg={useColorModeValue("gray.100", "gray.800")}
            borderRadius="lg"
            boxShadow="md"
            px={3}
            py={2}
            flex="1"
            minW={0}
          >
            <Icon value={{ name: "CiSearch", library: "ci" }} />

            <Input
              placeholder="Search for dish, restaurant..."
              border="none"
              style={{ height: "30px" }}
              boxShadow="none"
              _focus={{ outline: "none", boxShadow: "none" }}
              bg="transparent"
              fontSize="md"
              flex="1"
              minW={0}
            />
          </Flex>
        </Flex>

        <HStack ml={4}>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            mr={{ base: 2, md: 2 }}
          />

          <ClientOnly fallback={<Skeleton boxSize="8" />}>
            <IconButton
              onClick={toggleColorMode}
              variant="outline"
              size="sm"
              mr={{ base: 2, md: 2 }}
              aria-label="Toggle Color Mode"
            >
              {colorMode === "light" ? <LuSun /> : <LuMoon />}
            </IconButton>
          </ClientOnly>

          <Flex alignItems={"center"}>
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button
                  variant="ghost"
                  py={2}
                  transition="all 0.3s"
                  _focus={{ boxShadow: "none" }}
                >
                  <HStack>
                    <AvatarGroup>
                      <Avatar.Root>
                        <Avatar.Fallback />

                        <Avatar.Image src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" />
                      </Avatar.Root>
                    </AvatarGroup>

                    <VStack
                      display={{ base: "none", md: "flex" }}
                      alignItems="flex-start"
                      ml="2"
                    >
                      <Text fontSize="sm">Justina Clark</Text>

                      <Text fontSize="xs" color="gray.300">
                        Admin
                      </Text>
                    </VStack>
                  </HStack>
                </Button>
              </Menu.Trigger>
              <Menu.Positioner>
                <Menu.Content
                  bg={useColorModeValue("white", "gray.900")}
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                >
                  <Menu.Item value="profile">Profile</Menu.Item>

                  <Menu.Separator />

                  <Menu.Item value="orders">Orders</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
          </Flex>
        </HStack>
      </Flex>

      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
