import { matchMedia } from "./_helpers/matchMedia.helper";

/**
 * If the user **prefers a dark color scheme**, this will be `true`.
 *
 * @category Media Features
 */
export const prefersDarkColorScheme = matchMedia(
    "(prefers-color-scheme: dark)"
);
