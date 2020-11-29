import { RGBA } from "..";
import { getBrightness } from "./getBrightness";

/**
 * Find out if one color is darker than another color.
 *
 * @category Brightness
 * @param colorA - Color in hex-format
 * @param colorB - Color in hex-format
 * @returns `true` if color1 is darker than color2.
 */
export const isColorDarkerThan = (colorA: RGBA, colorB: RGBA): boolean =>
    getBrightness(colorA) < getBrightness(colorB);
