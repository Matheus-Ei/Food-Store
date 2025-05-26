import { Box, BoxProps, Flex } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
import { useColorModeValue } from "@/components/ui/color-mode";
import { NavItem } from "@/components/organisms/Sidebar/NavItem";
import { IconType } from "@/components/atoms/icon";
import Logo from "../../../../assets/logo/logo-500x500.png";
import Image from "next/image";

export interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

interface SidebarContentProps extends BoxProps {
  onClose?: () => void;
  links: Array<LinkItemProps>;
}

export const SidebarContent: React.FC<SidebarContentProps> = ({
  links,
  ...rest
}) => {
  const router = useRouter();

  return (
    <Box
      display="flex"
      flexDirection="column"
      transition="0.3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRightWidth="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={60}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="200px"
        w="full"
        alignItems="center"
        justifyContent="start"
      >
        <Image src={Logo} alt="Logo" />
      </Flex>

      <Flex flex="1" h="full" gapY={2} direction="column">
        {links.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            style={{ height: "30px" }}
            onClick={() => router.push(link.href)}
          >
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};
