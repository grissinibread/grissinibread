import { Box, Flex } from "@chakra-ui/react";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Arrow from "./components/Arrow";

function App() {
  return (
    <Box bg='dark'>
      <Flex height='100vh' direction='column' justifyContent='space-between'>
        <NavBar />
        <Content />
        <Arrow />
      </Flex>

      <Experience />
    </Box>
  );
}

export default App;
