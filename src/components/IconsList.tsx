import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  technologies: string[];
}

const IconsList = ({ technologies }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    react: FaReact,
    typescript: TbBrandTypescript,
    javascript: RiJavascriptLine,
  };

  return (
    <HStack>
      {technologies.map((technology) => (
        <Icon key={technology} as={iconsMap[technology]} />
      ))}
    </HStack>
  );
};

export default IconsList;
