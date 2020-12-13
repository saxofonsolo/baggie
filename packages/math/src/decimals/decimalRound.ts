import { decimalAdjust } from "./_helpers/decimalAdjust";

/**
 * Round a number to nearest decimal places.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { decimalRound } from "@baggie/math";
 *
 * const two = decimalRound(13.3689, 2);
 * // two = 13.37
 *
 * const three = decimalRound(-13.1124, 3);
 * // three = -13.112
 * ```
 *
 * @category Decimals
 */
export const decimalRound = (number: number, decimalPlaces: number): number =>
    decimalAdjust(number, decimalPlaces, Math.round);
