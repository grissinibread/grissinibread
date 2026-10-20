import { Box } from "@chakra-ui/react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { elastic } from "./motion";

const MotionRouterLink = motion.create(RouterLink);

interface Props {
  children: ReactNode;
  // Internal route; takes precedence over href.
  to?: string;
  href?: string;
  raised?: boolean;
}

const PillButton = ({ children, to, href, raised = false }: Props) => {
  const motionProps = {
    whileHover: { scale: 1.05, boxShadow: "var(--chakra-shadows-lifted)" },
    whileTap: { scale: 0.95 },
    transition: elastic,
  };

  return (
    <Box
      asChild
      display="inline-flex"
      alignItems="center"
      gap={2}
      w="fit-content"
      px={8}
      py={4}
      rounded="full"
      bg="page.accent"
      color="page.onAccent"
      fontFamily="heading"
      fontWeight="800"
      fontSize="1rem"
      lineHeight="1"
      letterSpacing="0.04em"
      textTransform="uppercase"
      shadow={raised ? "lifted" : undefined}
      pointerEvents="auto"
      transition="background-color 0.4s, color 0.4s"
    >
      {to ? (
        <MotionRouterLink to={to} {...motionProps}>
          {children}
        </MotionRouterLink>
      ) : (
        <motion.a
          href={href}
          target={href?.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          {...motionProps}
        >
          {children}
        </motion.a>
      )}
    </Box>
  );
};

export default PillButton;
