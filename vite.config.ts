import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves 404.html for unknown paths; a copy of index.html lets client-side routes
// like /experience load when opened directly or refreshed.
const spaFallback = (): Plugin => {
  let outDir = "dist";
  return {
    name: "spa-fallback",
    apply: "build",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      copyFileSync(resolve(outDir, "index.html"), resolve(outDir, "404.html"));
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
  resolve: {
    tsconfigPaths: true,
  },
});
