import { Card } from "@chakra-ui/react";
import type { Role } from "./Experience";

interface Props {
  role: Role;
}

const RoleCard = ({ role }: Props) => {
  return (
    <Card.Root borderColor='purple.border'>
      <Card.Header>
        <Card.Description>{role.title}</Card.Description>
        <Card.Title>{role.company}</Card.Title>
        <Card.Description>{role.date}</Card.Description>
      </Card.Header>

      <Card.Body>
        <Card.Description paddingLeft={4}>
          {role.description.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default RoleCard;
