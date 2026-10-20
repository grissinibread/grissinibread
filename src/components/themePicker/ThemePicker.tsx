import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { LuPalette } from "react-icons/lu";
import { THEME_STORAGE_KEY, themes, type Theme } from "../data/Themes";
import { elastic } from "../motion";

const RADIUS_REM = 5.5;

const applyTheme = (theme: Theme) => {
  const style = document.documentElement.style;
  style.setProperty("--page-bg", theme.bg);
  style.setProperty("--page-fg", theme.fg);
  style.setProperty("--page-accent", theme.accent);
  style.setProperty("--page-on-accent", theme.onAccent);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
  } catch {
    // Storage can be unavailable (private mode); the theme still applies for this visit.
  }
};

const readStoredThemeName = () => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Theme).name : themes[0].name;
  } catch {
    return themes[0].name;
  }
};

// Swatches fan out in a quarter circle from straight up to straight left.
const swatchOffset = (index: number) => {
  const angle = Math.PI / 2 + (index / (themes.length - 1)) * (Math.PI / 2);
  return { x: `${Math.cos(angle) * RADIUS_REM}rem`, y: `${-Math.sin(angle) * RADIUS_REM}rem` };
};

const ThemePicker = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(readStoredThemeName);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  const select = (theme: Theme) => {
    applyTheme(theme);
    setActive(theme.name);
    setOpen(false);
  };

  return (
    <Box
      ref={ref}
      position="fixed"
      bottom={4}
      right={4}
      zIndex={2}
      display="grid"
      placeItems="center"
    >
      <AnimatePresence>
        {open &&
          themes.map((theme, index) => (
            <Box
              asChild
              key={theme.name}
              gridArea="1 / 1"
              boxSize={8}
              rounded="full"
              cursor="pointer"
              borderWidth="2px"
              borderColor={active === theme.name ? "page.fg" : "page.fg/15"}
            >
              <motion.button
                type="button"
                aria-label={`${theme.name} theme`}
                aria-pressed={active === theme.name}
                style={{ background: `linear-gradient(135deg, ${theme.bg} 50%, ${theme.accent} 50%)` }}
                initial={{ x: 0, y: 0, scale: 0.5, opacity: 0 }}
                animate={{ ...swatchOffset(index), scale: 1, opacity: 1 }}
                exit={{ x: 0, y: 0, scale: 0.5, opacity: 0, transition: { duration: 0.15 } }}
                transition={{ ...elastic, delay: index * 0.05 }}
                whileHover={{ scale: 1.2 }}
                onClick={() => select(theme)}
              />
            </Box>
          ))}
      </AnimatePresence>

      <Box
        asChild
        gridArea="1 / 1"
        zIndex={1}
        boxSize={12}
        display="grid"
        placeItems="center"
        rounded="full"
        bg="page.bg"
        color="page.fg"
        shadow="lifted"
        cursor="pointer"
        transition="background-color 0.4s, color 0.4s"
      >
        <motion.button
          type="button"
          aria-label="Change color theme"
          aria-expanded={open}
          animate={{ rotate: open ? 45 : 0 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          transition={elastic}
          onClick={() => setOpen((o) => !o)}
        >
          <LuPalette size="1.4rem" />
        </motion.button>
      </Box>
    </Box>
  );
};

export default ThemePicker;
