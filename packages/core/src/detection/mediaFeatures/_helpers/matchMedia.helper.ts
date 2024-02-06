import { isBrowser } from "../../environment/isBrowser";

/**
 * Match media
 *
 * @internal
 * @param string - The media string to test
 * @returns `true` if the media string matches an applied feature
 */
export function matchMedia(string: string): boolean {
    return isBrowser && window.matchMedia && window.matchMedia(string).matches;
}
