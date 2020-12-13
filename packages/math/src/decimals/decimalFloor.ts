import { decimalAdjust } from "./_helpers/decimalAdjust.helper";

/**
 * Round down a number to nearest decimal places.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { decimalFloor } from "@baggie/math";
 *
 * const two = decimalFloor(13.345, 2);
 * // two = 13.34
 *
 * const three = decimalFloor(13.1111, 3);
 * // three = 13.111
 * ```
 *
 * @category Decimals
 */
export const decimalFloor = (number: number, decimalPlaces: number): number =>
    decimalAdjust(number, decimalPlaces, Math.floor);
