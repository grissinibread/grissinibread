import { Box, Flex } from "@chakra-ui/react";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import SocialsList from "./components/SocialsList";
import Experience from "./components/Experience";

function App() {
  return (
    <Box bg='dark'>
      <Flex height='100vh' direction='column' justifyContent='space-between'>
        <NavBar />
        <Content />
        <SocialsList />
      </Flex>
      
      <Experience />
    </Box>
  );
}

export default App;
