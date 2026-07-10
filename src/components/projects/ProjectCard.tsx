import { Card, Image, Link } from "@chakra-ui/react";
import IconsList from "../IconsList";
import type { Project } from "../data/Projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  // TODO: Apply same theme to all cards
  return (
    <Link href={project.link} target="_blank">
      <Card.Root
        borderRadius={8}
        overflow="hidden"
        bg="blackAlpha.100"
        borderColor="black"
      >
        <Image src={project.image}></Image>
        <Card.Header>
          <Card.Title>{project.title}</Card.Title>
          <IconsList technologies={project.technologies} />
        </Card.Header>

        <Card.Body>
          <Card.Description color='white'>{project.description}</Card.Description>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

export default ProjectCard;
