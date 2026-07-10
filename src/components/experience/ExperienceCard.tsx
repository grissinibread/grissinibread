import { Card } from "@chakra-ui/react";
import type { Role } from "../data/Experiences";

interface Props {
  role: Role;
}

const RoleCard = ({ role }: Props) => {
  return (
    <Card.Root bg="blackAlpha.100" borderColor="black">
      <Card.Header>
        <Card.Description color="white">{role.title}</Card.Description>
        <Card.Title>{role.company}</Card.Title>
        <Card.Description color="white">{role.date}</Card.Description>
      </Card.Header>

      <Card.Body>
        <Card.Description paddingLeft={4} color="white">
          {role.description.map((description) => (
            <li key={description}>{description}</li>
          ))}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default RoleCard;
