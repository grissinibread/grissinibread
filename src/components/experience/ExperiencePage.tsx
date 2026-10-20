import { Flex } from "@chakra-ui/react";
import RoleCard from "./ExperienceCard";
import { experiences } from "../data/Experiences";
import TextBlock from "../TextBlock";

const Experience = () => {
  return (
    <Flex
      as="section"
      id="experience"
      direction="column"
      align="center"
      gap={{ base: 16, md: 24 }}
      pt="9rem"
      pb={{ base: 24, md: 40 }}
      px={6}
    >
      <TextBlock
        as="h1"
        title="experience"
        description="Where I've been building, learning, and helping others get into computing."
      />

      <Flex direction="column" w="full" maxW="860px">
        {experiences.map((experience) => (
          <RoleCard key={experience.id} role={experience} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Experience;
