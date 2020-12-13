import { decimalAdjust } from "./_helpers/decimalAdjust.helper";

/**
 * Round up a number to nearest decimal places.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { decimalCeil } from "@baggie/math";
 *
 * const two = decimalCeil(13.345, 2);
 * // two = 13.35
 *
 * const three = decimalCeil(13.1111, 3);
 * // three = 13.112
 * ```
 *
 * @category Decimals
 */
export const decimalCeil = (number: number, decimalPlaces: number): number =>
    decimalAdjust(number, decimalPlaces, Math.ceil);
