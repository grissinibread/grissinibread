import { Box, Flex } from "@chakra-ui/react";
import Content from "./components/Content";
import NavBar from "./components/navBar/NavBar";
import Arrow from "./components/Arrow";
import Projects from "./components/projects/Projects";
import "./components/App.css";

function Home() {
  return (
    <Box bg="blue.400" padding={4}>
      <Flex
        minHeight="100dvh"
        direction="column"
        justifyContent="space-between"
      >
        <NavBar />
        <Content />
        <Arrow />
      </Flex>

      <Projects />
    </Box>
  );
}

export default Home;
