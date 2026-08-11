import { Card, Icon, List } from "@chakra-ui/react";
import type { Role } from "../data/Experiences";
import { TbRobot } from "react-icons/tb";

interface Props {
  role: Role;
}

const RoleCard = ({ role }: Props) => {
  return (
    <Card.Root bg="transparent" borderColor="transparent">
      <Card.Header>
        <Card.Description color="white" fontSize="2xl">
          {role.title}
        </Card.Description>
        <Card.Title fontSize="3xl">{role.company}</Card.Title>
        <Card.Description color="white" fontSize="2xl">
          {role.date}
        </Card.Description>
      </Card.Header>

      <Card.Body>
        <Card.Description paddingLeft={4} color="white" asChild>
          <List.Root>
            {role.description.map((description, index) => (
              <List.Item key={index} fontSize="lg" _marker={{ color: "white" }}>
                {description}
              </List.Item>
            ))}
          </List.Root>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default RoleCard;
