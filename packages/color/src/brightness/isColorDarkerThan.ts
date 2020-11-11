import { getBrightness } from "./getBrightness";

/**
 * Find out if one color is darker than another color.
 *
 * @category Brightness
 * @param colorA - Color in hex-format
 * @param colorB - Color in hex-format
 * @returns **True** if color1 is darker than color2.
 */
export const isColorDarkerThan = (colorA: string, colorB: string): boolean =>
    getBrightness(colorA) < getBrightness(colorB);
