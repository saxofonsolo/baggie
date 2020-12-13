import { RGBA } from "..";
import { getBrightness } from "./getBrightness";

/**
 * Find out if one color is darker than another color.
 *
 * @category Brightness
 */
export const isColorDarkerThan = (colorA: RGBA, colorB: RGBA): boolean =>
    getBrightness(colorA) < getBrightness(colorB);
