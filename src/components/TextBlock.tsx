import { Flex, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  as?: "h1" | "h2";
}

const TextBlock = ({ title, description, as = "h2" }: Props) => {
  return (
    <Flex direction="column" align="center" gap={4} px={4} textAlign="center">
      <Text as={as} textStyle="title">
        {title}
      </Text>
      <Text textStyle="body" maxW="24em">
        {description}
      </Text>
    </Flex>
  );
};

export default TextBlock;
