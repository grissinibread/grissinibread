import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { TbBrandAngular } from "react-icons/tb";
import { SiJest } from "react-icons/si";
import { SiC } from "react-icons/si";
import { BsOpenai } from "react-icons/bs";

interface Props {
  technologies: string[];
}

const IconsList = ({ technologies }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    angular: TbBrandAngular,
    c: SiC,
    javascript: RiJavascriptLine,
    jest: SiJest,
    openAI: BsOpenai,
    react: FaReact,
    typescript: TbBrandTypescript,
  };

  return (
    <HStack>
      {technologies.map((technology) => (
        <Icon
          key={technology}
          as={iconsMap[technology]}
          width="25px"
          height="25px"
        />
      ))}
    </HStack>
  );
};

export default IconsList;
