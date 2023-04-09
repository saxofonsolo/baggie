import { dontMatchMedia } from "./_helpers/dontMatchMedia.helper";

/**
 * If the user **prefers reduced motion**, this will be `true`.
 */
export const prefersReducedMotion = dontMatchMedia(
    "(prefers-reduced-motion: no-preference)",
);
