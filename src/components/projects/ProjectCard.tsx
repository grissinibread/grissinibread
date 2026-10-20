import { Box, Center, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import { FiGithub } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { TbRobot } from "react-icons/tb";
import IconsList from "../IconsList";
import type { Project } from "../data/Projects";
import PillButton from "../PillButton";
import { softElastic } from "../motion";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Flex direction="column" gap={5}>
      <Box
        asChild
        aspectRatio="5 / 3"
        rounded="2xl"
        overflow="hidden"
        shadow="lifted"
        bg="page.accent"
        color="page.onAccent"
        transition="background-color 0.4s, color 0.4s"
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={softElastic}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              w="full"
              h="full"
              objectFit="cover"
            />
          ) : (
            <Center h="full">
              <Icon as={TbRobot} boxSize="35%" />
            </Center>
          )}
        </motion.div>
      </Box>

      <Flex justify="space-between" align="center" gap={4} wrap="wrap">
        <Text as="h3" textStyle="subtitle">
          {project.title}
        </Text>
        <IconsList technologies={project.technologies} />
      </Flex>

      <Text textStyle="body" color="page.fg/80">
        {project.description}
      </Text>

      {project.link && (
        <PillButton href={project.link}>
          {project.linkType === "gitHub" ? (
            <>
              github <FiGithub />
            </>
          ) : (
            <>
              visit site <MdArrowOutward />
            </>
          )}
        </PillButton>
      )}
    </Flex>
  );
};

export default ProjectCard;
