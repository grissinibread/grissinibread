import { Flex, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import { experiences } from "../data/Experiences";
import { elastic } from "../motion";

const name = ["alejandro", "navarro"];

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
    <Flex
      as="section"
      flexDirection="column"
      alignContent="center"
      justifyContent="center"
      height="100dvh"
      pt={{ base: 28, md: 16 }}
      rowGap={{ base: 12, md: 16 }}
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
          <Text textStyle="label" maxW="26em" textAlign="center">
            {companyList}
          </Text>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default Hero;
