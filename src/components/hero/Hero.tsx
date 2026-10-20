import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import chatBot from "../../assets/hero/chatbot.webp";
import expenseTracker from "../../assets/hero/expenseTracker.webp";
import gameHub from "../../assets/hero/gameHub.webp";
import reportGenerator from "../../assets/hero/reportGenerator.webp";
import { experiences } from "../data/Experiences";
import { elastic, snappy } from "../motion";

const name = ["alejandro", "navarro"];

// Square crops of the project screenshots, pre-sized to ~2x their display size so they stay sharp.
// Each card has a resting tilt/offset.
const heroImages = [
  { src: expenseTracker, alt: "Expense Tracker", rotate: 2, y: "5%" },
  { src: chatBot, alt: "ChatBot", rotate: -3, y: "-6%" },
  { src: gameHub, alt: "Game Hub", rotate: 6, y: "5%" },
  { src: reportGenerator, alt: "Report Generator", rotate: -2, y: "-4%" },
];

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
      rowGap={{ base: 12, md: 16 }}
      p={4}
      pt={{ base: 28, md: 48 }}
      placeItems="center"
      textAlign="center"
    >

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
          {heroImages.map((image, index) => (
            // Outer element owns the delayed entrance; the inner card owns hover/drag, so the
            // entrance delay never applies to interactions.
            <Box
              asChild
              key={image.alt}
              position="relative"
              w="clamp(5rem, 20vw, 11rem)"
              aspectRatio="1"
              mr={index < heroImages.length - 1 ? "-6%" : undefined}
              _hover={{ zIndex: 2 }}
              _active={{ zIndex: 3 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: image.rotate, y: image.y }}
                animate={{ scale: 1, rotate: image.rotate, y: image.y }}
                transition={{ ...elastic, delay: 0.4 + index * 0.08 }}
              >
                <Box
                  asChild
                  w="full"
                  h="full"
                  rounded="2xl"
                  overflow="hidden"
                  shadow="lifted"
                  borderWidth="1px"
                  borderColor="page.fg/10"
                  cursor="grab"
                  _active={{ cursor: "grabbing" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.06, rotate: -image.rotate }}
                    whileDrag={{ scale: 1.12 }}
                    transition={snappy}
                    drag
                    dragSnapToOrigin
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      w="full"
                      h="full"
                      objectFit="cover"
                      draggable={false}
                    />
                  </motion.div>
                </Box>
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
