import { Center, Link } from "@chakra-ui/react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { keyframes } from "@emotion/react";

const Arrow = () => {
  const upDown = keyframes`
    0% 100% { transform: translateY(0%); }
    50% { transform: translateY(15%); }
  `;

  return (
    <Center padding={4} animation={`${upDown} 2.5s infinite`}>
      <Link href="#experience">
        <MdOutlineKeyboardDoubleArrowDown size='30px' />
      </Link>
    </Center>
  );
};

export default Arrow;
