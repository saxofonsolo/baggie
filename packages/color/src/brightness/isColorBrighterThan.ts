import { RGBA } from "..";
import { getBrightness } from "./getBrightness";

/**
 * Find out if one color is brighter than another color.
 *
 * @category Brightness
 */
export const isColorBrighterThan = (colorA: RGBA, colorB: RGBA): boolean =>
    getBrightness(colorA) > getBrightness(colorB);
