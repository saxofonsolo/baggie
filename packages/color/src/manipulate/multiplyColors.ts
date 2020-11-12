import { getMean } from "@baggie/math";
import { RGBA } from "../_interfaces/rgba.interface";

/**
 * Blend two colors together with the multiply mode.
 *
 * Result will be darker, since we're working with an additive color model (RGB).
 * This function is the opposite of `screenColors()`.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { multiplyColors, convertRgbToHex } from "@baggie/color";
 *
 * const color = multiplyColors("#FF1100", "#88FF00");
 * const hex = convertRgbToHex(color);
 * // hex = "#881100"
 * ```
 *
 * @see https://en.wikipedia.org/wiki/Blend_modes
 * @category Manipulate
 */
export const multiplyColors = (color1: RGBA, color2: RGBA): RGBA => ({
    red: Math.round((color1.red * color2.red) / 255),
    green: Math.round((color1.green * color2.green) / 255),
    blue: Math.round((color1.blue * color2.blue) / 255),
    alpha: Math.min(getMean([color1.alpha || 1, color2.alpha || 1]), 1),
});
