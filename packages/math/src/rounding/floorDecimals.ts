import { decimalAdjust } from "./_helpers/decimalAdjust.helper";

/**
 * Round down a number to nearest decimal places.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { floorDecimals } from "@baggie/math";
 *
 * const two = floorDecimals(13.345, 2);
 * // two = 13.34
 *
 * const three = floorDecimals(13.1111, 3);
 * // three = 13.111
 * ```
 *
 * @category Rounding
 */
export const floorDecimals = (number: number, decimalPlaces: number): number =>
    decimalAdjust(number, decimalPlaces, Math.floor);
