import { matchMedia } from "./_helpers/matchMedia.helper";

/**
 * If the user's device is in **landscape orientation**, this will be `true`.
 */
export const orientationIsLandscape = matchMedia("(orientation: landscape)");
