import { matchMedia } from "./_helpers/matchMedia.helper";

/**
 * If the user's device is in **portrait orientation**, this will be `true`.
 */
export const orientationIsPortrait = matchMedia("(orientation: portrait)");
