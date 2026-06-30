import { Center, Grid, GridItem } from "@chakra-ui/react";
import RoleCard from "./ExperienceCard";
import experiences from "./data/Experiences";

const Experience = () => {
  return (
    <section id="experience">
      <Center padding={4} fontSize="3xl" fontWeight="bold">
        experience
      </Center>

      <Grid templateColumns={{ lg: "repeat(3, 1fr)" }} gap="4" padding="4">
        {experiences.map((experience, index) => (
          <GridItem
            key={experience.id}
            colSpan={2}
            colStart={{ md: index % 2 === 0 ? 1 : 2 }}
          >
            <RoleCard role={experience} />
          </GridItem>
        ))}
      </Grid>
    </section>
  );
};

export default Experience;
