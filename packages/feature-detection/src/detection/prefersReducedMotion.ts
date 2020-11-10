import { isBrowser } from "./isBrowser";

export const prefersReducedMotion =
    isBrowser &&
    window.matchMedia &&
    !window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
