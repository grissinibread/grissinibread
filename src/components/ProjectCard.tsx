import { Card, Image, Link } from "@chakra-ui/react";
import gameHub from "../assets/gameHub.png";
import IconsList from "./IconsList";

const ProjectCard = () => {
  return (
    <Link href="https://github.com/grissinibread/game-hub" target="_blank">
      <Card.Root borderRadius={8} overflow="hidden" borderColor="purple.border">
        {/* TODO: replace image with a mac screenshot */}
        <Image src={gameHub}></Image>
        <Card.Header>
          <Card.Title>Game Hub</Card.Title>
          <IconsList technologies={["typescript", "react"]} />
        </Card.Header>

        <Card.Body>
          <Card.Description>Built to understand react.</Card.Description>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

export default ProjectCard;
