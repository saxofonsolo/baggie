import { getBrightness } from "./getBrightness";

/**
 * Find out if one color is brighter than another color.
 *
 * @param {string} colorA
 * @param {string} colorB
 * @return boolean True if color1 is brighter than color2.
 */
export const isColorBrighterThan = (colorA: string, colorB: string): boolean =>
    getBrightness(colorA) > getBrightness(colorB);
