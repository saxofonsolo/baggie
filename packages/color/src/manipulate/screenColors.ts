import { getMean } from "@baggie/math";
import { RGBA } from "../_interfaces/rgba.interface";

/**
 * Blend two colors together with the screen mode.
 *
 * Result will be lighter, since we're working with an additive color model (RGB).
 * This function is the opposite of `multiplyColors()`.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { screenColors } from "@baggie/color";
 *
 * const colorA = { red: 255, green: 0, blue: 0 };
 * const colorB = { red: 0, green: 255, blue: 0 };
 *
 * const newColor = screenColors(colorA, colorB);
 * // newColor = { red: 255, green: 255, blue: 0 }
 * ```
 *
 * @see https://en.wikipedia.org/wiki/Blend_modes
 * @category Manipulate
 */
export const screenColors = (color1: RGBA, color2: RGBA): RGBA => ({
    red: Math.round(1 - (1 - color1.red) * (1 - color2.red)),
    green: Math.round(1 - (1 - color1.green) * (1 - color2.green)),
    blue: Math.round(1 - (1 - color1.blue) * (1 - color2.blue)),
    alpha: Math.min(getMean([color1.alpha || 1, color2.alpha || 1]), 1),
});
