import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { TbBrandAngular } from "react-icons/tb";
import { SiJest } from "react-icons/si";
import { SiC } from "react-icons/si";

interface Props {
  technologies: string[];
}

const IconsList = ({ technologies }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    react: FaReact,
    typescript: TbBrandTypescript,
    javascript: RiJavascriptLine,
    angular: TbBrandAngular,
    jest: SiJest,
    c: SiC,
  };

  return (
    <HStack>
      {technologies.map((technology) => (
        <Icon key={technology} as={iconsMap[technology]} width="25px" height="25px" />
      ))}
    </HStack>
  );
};

export default IconsList;
