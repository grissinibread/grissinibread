import { Card, Image, Link } from "@chakra-ui/react";
import IconsList from "./IconsList";
import type { Project } from "./data/Projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Link href="https://github.com/grissinibread/game-hub" target="_blank">
      <Card.Root borderRadius={8} overflow="hidden" borderColor="purple.border">
        <Image src={project.image}></Image>
        <Card.Header>
          <Card.Title>{project.title}</Card.Title>
          <IconsList technologies={project.technologies} />
        </Card.Header>

        <Card.Body>
          <Card.Description>{project.description}</Card.Description>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

export default ProjectCard;
