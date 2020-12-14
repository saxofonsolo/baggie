import { decimalAdjust } from "./_helpers/decimalAdjust.helper";

/**
 * Round up a number to nearest decimal places.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { ceilDecimals } from "@baggie/math";
 *
 * const two = ceilDecimals(13.345, 2);
 * // two = 13.35
 *
 * const three = ceilDecimals(13.1111, 3);
 * // three = 13.112
 * ```
 *
 * @category Rounding
 */
export const ceilDecimals = (number: number, decimalPlaces: number): number =>
    decimalAdjust(number, decimalPlaces, Math.ceil);
