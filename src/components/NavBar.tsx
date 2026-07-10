import {
  Box,
  Collapsible,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const socials = [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/alejandro-navarro-profile",
    },
    { name: "github", link: "https://github.com/grissinibread" },
    { name: "email", link: "mailto:nav.alejandro@outlook.com" },
  ];

  return (
    <Flex padding={4} justifyContent="space-between">
      <Text fontWeight="bold">alejandro navarro</Text>
      
      <Collapsible.Root hideFrom={'lg'}>
        <VStack align='end'>
          <Collapsible.Trigger>
            <RxHamburgerMenu />
          </Collapsible.Trigger>
          <Collapsible.Content>
            <VStack>
              {socials.map((s) => (
                <Link key={s.name} href={s.link} paddingLeft={4}>
                  {s.name}
                </Link>
              ))}
            </VStack>
          </Collapsible.Content>
        </VStack>
      </Collapsible.Root>

      <Box hideBelow={'lg'}>
        {socials.map((s) => (
          <Link key={s.name} href={s.link} paddingLeft={4}>
            {s.name}
          </Link>
        ))}
      </Box>
    </Flex>
  );
};

export default NavBar;
