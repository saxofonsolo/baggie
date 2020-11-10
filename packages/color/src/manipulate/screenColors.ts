import { getMean } from "@baggie/math";
import { RGBA } from "../_interfaces/rgba.interface";

/**
 * Blend two colors together with the screen mode.
 *
 * Result will be lighter, since we're working with an additive color model (RGB).
 * This function is the opposite of `multiplyColors()`.
 *
 * @see https://en.wikipedia.org/wiki/Blend_modes
 *
 * @example
 * import { screenColors } from "./utils/calc/colors/colorManipulation";
 * import { rgbToHex } from "./utils/calc/colors/colorConversion";
 *
 * const color = screenColors("#FF0000", "#00FF00");
 *
 * // This will output "#ffff00"
 * window.console.log(rgbToHex(color));
 */
export const screenColors = (color1: RGBA, color2: RGBA): RGBA => ({
    red: Math.round(1 - (1 - color1.red) * (1 - color2.red)),
    green: Math.round(1 - (1 - color1.green) * (1 - color2.green)),
    blue: Math.round(1 - (1 - color1.blue) * (1 - color2.blue)),
    alpha: Math.min(getMean([color1.alpha || 1, color2.alpha || 1]), 1),
});
