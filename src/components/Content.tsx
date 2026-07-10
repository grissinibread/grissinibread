import { Center, Image, Text } from "@chakra-ui/react";
import nerdFace from "../assets/nerdFace.svg";

const Content = () => {
  return (
    <Center
      paddingX={4}
      fontWeight="bold"
      fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "7xl" }}
    >
      <Text>
        hello! I'm ale <Image src={nerdFace} display={"inline-flex"} height={{ base: "7", md: "10", lg: "14", xl: "16"}}/> <br />
        a software engineer <br />- currently looking for work!
      </Text>
    </Center>
  );
};

export default Content;
