export interface Theme {
  name: string;
  bg: string;
  fg: string;
  accent: string;
  onAccent: string;
}

export const themes: Theme[] = [
  { name: "paper", bg: "#ffffff", fg: "#2c2c2c", accent: "#cbcbcb", onAccent: "#2c2c2c" },
  { name: "sand", bg: "#ede6d3", fg: "#2c2c2c", accent: "#ff7906", onAccent: "#2c2c2c" },
  { name: "cobalt", bg: "#0779ff", fg: "#ffffff", accent: "#002180", onAccent: "#ffffff" },
  { name: "fern", bg: "#37af5d", fg: "#00240b", accent: "#005319", onAccent: "#ffffff" },
  { name: "grape", bg: "#3c0350", fg: "#ffffff", accent: "#db30f5", onAccent: "#1a0122" },
];

// index.html reads this key before first paint to avoid a flash of the default theme.
export const THEME_STORAGE_KEY = "page-theme";
