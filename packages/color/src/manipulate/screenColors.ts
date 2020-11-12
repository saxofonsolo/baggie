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
 * import { convertRgbToHex, screenColors } from "@baggie/color";
 *
 * const color = screenColors("#FF0000", "#00FF00");
 * const hex = convertRgbToHex(color);
 * // hex = "#FFFF00"
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
