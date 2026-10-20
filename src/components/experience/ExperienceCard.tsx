import { Box, Grid, List, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import type { Role } from "../data/Experiences";
import { softElastic } from "../motion";

interface Props {
  role: Role;
}

const RoleCard = ({ role }: Props) => {
  return (
    <Box
      asChild
      borderTopWidth="1px"
      borderColor="page.fg/15"
      py={10}
      _last={{ borderBottomWidth: "1px" }}
    >
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={softElastic}
      >
        <Grid templateColumns={{ base: "1fr", md: "12rem 1fr" }} gap={{ base: 4, md: 10 }}>
          <Text textStyle="label" color="page.fg/60">
            {role.date}
          </Text>

          <Box>
            <Text as="h2" textStyle="subtitle">
              {role.company}
            </Text>
            <Text textStyle="label" mt={3}>
              {role.title}
            </Text>
            <List.Root mt={6} ps={5} gap={2} textStyle="body" color="page.fg/80">
              {role.description.map((description, index) => (
                <List.Item key={index} _marker={{ color: "page.fg/40" }}>
                  {description.trim()}
                </List.Item>
              ))}
            </List.Root>
          </Box>
        </Grid>
      </motion.article>
    </Box>
  );
};

export default RoleCard;
