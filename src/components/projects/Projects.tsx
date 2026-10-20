import { Flex, Grid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/Projects";
import TextBlock from "../TextBlock";

const Projects = () => {
  return (
    <Flex as="section" id="projects" direction="column" align="center" gap={16}>
      <TextBlock
        title="selected work"
        description="Recent and notable projects — what I built, and what I learned building it."
      />

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: "5rem", md: "min(8vw, 6rem)" }}
        w="full"
        maxW="1200px"
        px={{ base: 6, md: 16 }}
        alignItems="start"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Grid>
    </Flex>
  );
};

export default Projects;
