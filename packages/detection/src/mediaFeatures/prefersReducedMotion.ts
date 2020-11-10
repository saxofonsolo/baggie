import { matchMedia } from "./_helpers/matchMedia.helper";

export const prefersReducedMotion = matchMedia(
    "(prefers-reduced-motion: no-preference)"
);
