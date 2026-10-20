import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import PillButton from "../PillButton";

const Header = () => {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      insetX={0}
      p={4}
      justify="flex-end"
      zIndex={2}
      pointerEvents="none"
    >
      <PillButton to={onHome ? "/experience" : "/"} raised>
        {onHome ? "experience" : "home"}
      </PillButton>
    </Flex>
  );
};

export default Header;
