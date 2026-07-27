import { Card, Flex, Icon, Image, Link } from "@chakra-ui/react";
import IconsList from "../IconsList";
import type { Project } from "../data/Projects";
import { FiGithub } from "react-icons/fi";
import { MdInsertLink } from "react-icons/md";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  // TODO: Apply same theme to all cards
  return (
    <Link href={project.link} target="_blank">
      <Card.Root minH={project.image ? '550px' : 'fit-content'}
        borderRadius={8}
        overflow="hidden"
        bg="blackAlpha.100"
        borderColor="black"
      >
        <Card.Header>
          <Image src={project.image}></Image>
          <Card.Title>{project.title}</Card.Title>
          <IconsList technologies={project.technologies} />
        </Card.Header>

        <Card.Body>
          <Card.Description color="white">
            {project.description}
          </Card.Description>
          <Flex alignSelf='flex-end'>
            <Icon
              as={
                project.link && project.linkType === "gitHub"
                  ? FiGithub
                  : MdInsertLink
              }
              boxSize={30}
            />
          </Flex>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

export default ProjectCard;
