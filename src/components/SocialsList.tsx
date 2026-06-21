import {  Center, Link } from "@chakra-ui/react";

const SocialsList = () => {
  const socials = [
    { name: "linkedin", link: "https://www.linkedin.com/in/alejandro-navarro-profile" },
    { name: "github", link: "https://github.com/grissinibread" },
    { name: "email", link: "mailto:nav.alejandro@outlook.com" },
  ];

  return (
    <Center gap={8} padding='4'>
      {socials.map((s) => (
        <Link key={s.name} href={s.link}>
          {s.name}
        </Link>
      ))}
    </Center>
  );
};

export default SocialsList;
