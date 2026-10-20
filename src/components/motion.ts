import type { Transition } from "motion/react";

// Bouncy spring used for most hover/press/entrance interactions.
export const elastic: Transition = { type: "spring", stiffness: 260, damping: 12, mass: 0.8 };

// Slower, softer spring for large elements entering the viewport.
export const softElastic: Transition = { type: "spring", stiffness: 140, damping: 14 };
