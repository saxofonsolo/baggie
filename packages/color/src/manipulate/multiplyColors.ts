import { getMean } from "@baggie/core";
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
 * import { multiplyColors } from "@baggie/color";
 *
 * const colorA = { red: 255, green: 255, blue: 255 };
 * const colorB = { red: 90, green: 98, blue: 98 };
 *
 * const newColor = multiplyColors(colorA, colorB);
 * // newColor = { red: 90, green: 98, blue: 98, alpha: 1 }
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
