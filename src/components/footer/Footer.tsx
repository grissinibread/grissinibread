import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import socials from "../data/Socials";
import { elastic } from "../motion";

// The footer sits fixed behind <main>; this transparent spacer scrolls into view to reveal it.
const Footer = () => {
  const phantom = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: phantom,
    offset: ["start end", "end end"],
  });
  const titleScaleY = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <>
      <Box ref={phantom} h='100dvh' aria-hidden />

      <Flex
        as='footer'
        position='fixed'
        bottom={0}
        left={0}
        w='full'
        minH='100dvh'
        zIndex={0}
        direction='column'
        align='center'
        justify='flex-end'
        gap={8}
        py={16}
        textAlign='center'
        bg='page.accent'
        color='page.onAccent'
        transition='background-color 0.4s, color 0.4s'
        css={{ containerType: "inline-size" }}
      >
        <Text
          asChild
          textStyle='display'
          fontSize='24cqi'
          lineHeight='0.8'
          letterSpacing='-0.03em'
          color='page.bg'
          userSelect='none'
          pointerEvents='none'
          transition='color 0.4s'
        >
          <motion.p
            style={{ scaleY: titleScaleY, transformOrigin: "bottom" }}
            aria-hidden
          >
            navarro
          </motion.p>
        </Text>

        <Flex
          as='ul'
          direction='column'
          align='center'
          gap={1}
          listStyle='none'
        >
          {socials.map((s) => (
            <li key={s.name}>
              <Box
                asChild
                display='block'
                textStyle='label'
                transition='color 0.15s'
                _hover={{ color: "page.bg" }}
                fontSize={{ smDown: 50, md: "auto" }}
              >
                <motion.a
                  href={s.link}
                  target={s.link.startsWith("http") ? "_blank" : undefined}
                  rel='noreferrer'
                  style={{ transformOrigin: "bottom" }}
                  whileHover={{ scaleY: 1.25 }}
                  transition={elastic}
                >
                  {s.name}
                </motion.a>
              </Box>
            </li>
          ))}
        </Flex>

        <Flex direction='column' align='center' gap={2}>
          <Text textStyle='caption' color='page.bg' transition='color 0.4s'>
            © {new Date().getFullYear()} alejandro navarro
          </Text>
          <Text textStyle='caption' color='page.bg' transition='color 0.4s'>
            design inspired by{" "}
            <Link
              href='https://spencergabor.work/'
              target='_blank'
              rel='noreferrer'
              color='inherit'
              textDecoration='underline'
              textUnderlineOffset='2px'
            >
              spencer gabor
            </Link>
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
