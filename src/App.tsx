import { Box, Flex } from "@chakra-ui/react";
import Content from "./components/Content";
import NavBar from "./components/navBar/NavBar";
import Experience from "./components/experience/Experience";
import Arrow from "./components/Arrow";
import Projects from "./components/projects/Projects";
import "./components/App.css";

function App() {
  return (
    <Box bg='blue.400'>
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
      <Experience />
    </Box>
  );
}

export default App;
