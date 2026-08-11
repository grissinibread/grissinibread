import { Box, Center, Flex } from "@chakra-ui/react";
import RoleCard from "./ExperienceCard";
import { experiences } from "../data/Experiences";

const Experience = () => {
  return (
    <Box id="experience" bg="blue.400">
      <Center padding={4} fontSize="7xl" fontWeight="bold" fontFamily="Sancreek" textShadow='-7px 7px black'>
        experience
      </Center>

      <Flex direction="column" gap="4" padding="4">
        {experiences.map((experience, index) => (
          <Box key={experience.id}>
            <RoleCard role={experience} />
            {experience.id !== experiences.length - 1 && <hr />}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Experience;
