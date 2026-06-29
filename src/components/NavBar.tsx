import { Box, Flex, Link, Text } from "@chakra-ui/react";

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
    <Flex padding={4} justifyContent='space-between'>
      <Text fontWeight='bold'>alejandro navarro</Text>
      <Box>
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
