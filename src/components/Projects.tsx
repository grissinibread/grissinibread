import { Center, Grid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import projects from "./data/Projects";

const Projects = () => {
  return (
    <section id="projects">
      <Center padding={4} fontSize="3xl">
        <b>projects</b>
      </Center>

      <Grid templateColumns={{ lg: "repeat(3, 1fr)" }} gap="4" padding="4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </section>
  );
};

export default Projects;
