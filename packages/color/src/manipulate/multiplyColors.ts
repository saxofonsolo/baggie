import { getMean } from "@baggie/math";
import { RGBA } from "../_interfaces/rgba.interface";

/**
 * Blend two colors together with the multiply mode.
 *
 * Result will be darker, since we're working with an additive color model (RGB).
 * This function is the opposite of `screenColors()`.
 *
 * @see https://en.wikipedia.org/wiki/Blend_modes
 *
 * @example
 * import { multiplyColors } from "./utils/calc/colors/colorManipulation";
 * import { rgbToHex } from "./utils/calc/colors/colorConversion";
 *
 * const color = multiplyColors("#FF1100", "#88FF00");
 *
 * // This will output "#881100"
 * window.console.log(rgbToHex(color));
 */
export const multiplyColors = (color1: RGBA, color2: RGBA): RGBA => ({
    red: Math.round((color1.red * color2.red) / 255),
    green: Math.round((color1.green * color2.green) / 255),
    blue: Math.round((color1.blue * color2.blue) / 255),
    alpha: Math.min(getMean([color1.alpha || 1, color2.alpha || 1]), 1),
});
