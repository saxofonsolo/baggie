import { decimalAdjust } from "./_helpers/decimalAdjust.helper";

/**
 * Round a number to nearest decimal places.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { roundDecimals } from "@baggie/math";
 *
 * const two = roundDecimals(13.3689, 2);
 * // two = 13.37
 *
 * const three = roundDecimals(-13.1124, 3);
 * // three = -13.112
 * ```
 *
 * @category Rounding
 */
export const roundDecimals = (number: number, decimalPlaces: number): number =>
    decimalAdjust(number, decimalPlaces, Math.round);
