import { Box, Flex } from "@chakra-ui/react";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Arrow from "./components/Arrow";
import Projects from "./components/Projects";

function App() {
  return (
    <Box bg='dark'>
      <Flex minHeight='100dvh' direction='column' justifyContent='space-between'>
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
