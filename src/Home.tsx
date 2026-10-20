import { Flex } from "@chakra-ui/react";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";

function Home() {
  return (
    <Flex direction="column" gap={{ base: 32, md: 48 }} pb={{ base: 24, md: 40 }}>
      <Hero />
      <Projects />
    </Flex>
  );
}

export default Home;
