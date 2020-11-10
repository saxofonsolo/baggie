import { isBrowser } from "../..";

export const matchMedia = (string: string): boolean =>
    isBrowser && window.matchMedia && !window.matchMedia(string).matches;
