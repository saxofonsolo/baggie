import { getBrightness } from "./getBrightness";

/**
 * Find out if one color is brighter than another color.
 *
 * @category Brightness
 * @param colorA - Color in hex-format
 * @param colorB - Color in hex-format
 * @returns `true` if color1 is brighter than color2.
 */
export const isColorBrighterThan = (colorA: string, colorB: string): boolean =>
    getBrightness(colorA) > getBrightness(colorB);
