import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const headline = {
  fontFamily: "heading",
  fontWeight: "800",
  lineHeight: "0.82",
  letterSpacing: "-0.02em",
  textTransform: "uppercase",
};

const config = defineConfig({
  globalCss: {
    html: {
      scrollBehavior: "smooth",
      overflowX: "clip",
    },
    body: {
      bg: "page.bg",
      color: "page.fg",
      fontFamily: "body",
      overflowX: "clip",
      transition: "background-color 0.4s, color 0.4s",
    },
    "::selection": {
      bg: "page.accent/40",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: `"Barlow Condensed", sans-serif` },
        body: { value: `"Inter", sans-serif` },
      },
      // Backed by CSS variables so the theme picker can swap palettes at runtime.
      colors: {
        page: {
          bg: { value: "var(--page-bg)" },
          fg: { value: "var(--page-fg)" },
          accent: { value: "var(--page-accent)" },
          onAccent: { value: "var(--page-on-accent)" },
        },
      },
      shadows: {
        // Stronger shadow for floating image cards; light/dark values live in App.css.
        card: { value: "var(--card-shadow)" },
        lifted: {
          value:
            "0px 9px 21px rgba(0,0,0,.1), 0px 38px 38px rgba(0,0,0,.09), 0px 85px 51px rgba(0,0,0,.05)",
        },
      },
    },
    textStyles: {
      display: { value: { ...headline, fontSize: "max(3.8rem, 7vw)" } },
      title: { value: { ...headline, fontSize: "clamp(2.5rem, 6vw, 4rem)" } },
      subtitle: { value: { ...headline, lineHeight: "0.9", fontSize: "2rem" } },
      label: {
        value: {
          fontFamily: "heading",
          fontWeight: "800",
          fontSize: "0.875rem",
          lineHeight: "1.1",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        },
      },
      body: {
        value: { fontFamily: "body", fontWeight: "500", fontSize: "1rem", lineHeight: "1.4" },
      },
      caption: {
        value: {
          fontFamily: "body",
          fontWeight: "500",
          fontSize: "0.6875rem",
          lineHeight: "1",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
