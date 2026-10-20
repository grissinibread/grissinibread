import { Box } from "@chakra-ui/react";
import { MotionConfig } from "motion/react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = () => {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollRestoration />
      <Header />
      <Box
        as="main"
        position="relative"
        zIndex={1}
        bg="page.bg"
        transition="background-color 0.4s"
      >
        <Outlet />
      </Box>
      <Footer />
    </MotionConfig>
  );
};

export default Layout;
