import { Box, Collapsible, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import socials from "../data/Socials";

const socialLinkStyles = {
  pl: 4,
  transition: "transform 0.2s, color 0.2s",
  textDecoration: "none",
};

const NavBar = () => {
  return (
    <Flex padding={4} justifyContent="space-between">
      <Text fontWeight="bold">alejandro navarro</Text>

      <Collapsible.Root
        hideFrom={"lg"}
        position="absolute"
        top="0%"
        right="0%"
        p={5}
      >
        <VStack align="end">
          <Collapsible.Trigger>
            <RxHamburgerMenu />
          </Collapsible.Trigger>
          <Collapsible.Content>
            <VStack paddingTop={3} spaceY={3}>
              {socials.map((s) => (
                <Link key={s.name} href={s.link} fontWeight={"bold"}>
                  {s.name}
                </Link>
              ))}
            </VStack>
          </Collapsible.Content>
        </VStack>
      </Collapsible.Root>

      <Box hideBelow={"lg"}>
        {socials.map((s) => (
          <Link
            key={s.name}
            href={s.link}
            {...socialLinkStyles}
            _hover={{
              color: s.color,
              transform: "scale(1.15)",
            }}
          >
            {s.name}
          </Link>
        ))}
      </Box>
    </Flex>
  );
};

export default NavBar;
