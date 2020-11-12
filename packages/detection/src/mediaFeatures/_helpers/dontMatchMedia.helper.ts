import { isBrowser } from "../..";

/**
 * Match media
 *
 * @internal
 * @param string - The media string to test
 * @returns `true` if the media string matches an applied feature
 */
export const dontMatchMedia = (string: string): boolean =>
    isBrowser && window.matchMedia && !window.matchMedia(string).matches;
