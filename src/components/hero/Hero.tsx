import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import { experiences } from "../data/Experiences";
import { projects } from "../data/Projects";
import { elastic } from "../motion";

const name = ["alejandro", "navarro"];

// Resting tilt/offset for each card in the image stack.
const tilts = [
  { rotate: 2, y: "5%" },
  { rotate: -3, y: "-6%" },
  { rotate: 6, y: "5%" },
  { rotate: -2, y: "-4%" },
];

const heroImages = projects.flatMap((p) => (p.image ? [p] : [])).slice(0, tilts.length);

const companies = [
  ...new Set(experiences.filter((e) => !e.date.endsWith("present")).map((e) => e.company)),
];
const companyList =
  companies.length > 1
    ? `${companies.slice(0, -1).join(", ")} & ${companies[companies.length - 1]}`
    : companies.join("");

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, delay: 0.25, ease: "easeOut" },
} as const;

const Hero = () => {
  return (
    <Box
      as="section"
      display="grid"
      gridTemplateRows="1fr auto 1fr"
      minH="100svh"
      p={4}
      pt={20}
      placeItems="center"
      textAlign="center"
    >
      <Box />

      <Flex direction="column" align="center" gap="min(4rem, 6vh)">
        <Text as="h1" textStyle="display" maxW="12em">
          {name.map((word, index) => (
            <motion.span
              key={word}
              style={{ display: "inline-block", transformOrigin: "bottom" }}
              initial={{ scaleY: 0, y: "0.25ch" }}
              animate={{ scaleY: 1, y: 0 }}
              transition={{ ...elastic, delay: index * 0.1 }}
            >
              {word}
              {index < name.length - 1 && " "}
            </motion.span>
          ))}
        </Text>

        <Flex justify="center" w="full">
          {heroImages.map((project, index) => (
            <Box
              asChild
              key={project.title}
              position="relative"
              w="clamp(5.5rem, 22vw, 12rem)"
              aspectRatio="1"
              rounded="2xl"
              overflow="hidden"
              shadow="lifted"
              bg="page.accent"
              cursor="grab"
              mr={index < heroImages.length - 1 ? "-6%" : undefined}
              _active={{ cursor: "grabbing" }}
            >
              <motion.div
                initial={{ scale: 0, ...tilts[index] }}
                animate={{ scale: 1, ...tilts[index] }}
                transition={{ ...elastic, delay: 0.4 + index * 0.08 }}
                whileHover={{ scale: 1.06, rotate: 0 }}
                whileDrag={{ scale: 1.12, zIndex: 3 }}
                drag
                dragSnapToOrigin
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  w="full"
                  h="full"
                  objectFit="cover"
                  // Crops the transparent window-shadow margin baked into the screenshots.
                  transform="scale(1.15)"
                  draggable={false}
                />
              </motion.div>
            </Box>
          ))}
        </Flex>

        <Text asChild textStyle="display" color="page.accent" transition="color 0.4s">
          <motion.h2
            style={{ transformOrigin: "bottom" }}
            initial={{ scaleY: 0, y: "0.25ch" }}
            animate={{ scaleY: 1, y: 0 }}
            transition={{ ...elastic, delay: name.length * 0.1 }}
          >
            software engineer
          </motion.h2>
        </Text>
      </Flex>

      <Flex asChild direction="column" align="center" gap={3}>
        <motion.div {...fadeIn}>
          <Text textStyle="caption" color="page.fg/60">
            previously at
          </Text>
          <Text textStyle="label" maxW="26em">
            {companyList}
          </Text>
        </motion.div>
      </Flex>
    </Box>
  );
};

export default Hero;
