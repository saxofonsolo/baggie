import { decimalAdjust } from "./_helpers/decimalAdjust.helper";
import { truncNumber } from "./truncNumber";

/**
 * Trunc a number to nearest decimal places.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { truncDecimals } from "@baggie/math";
 *
 * const two = truncDecimals(13.3689, 2);
 * // two = 13.36
 *
 * const three = truncDecimals(-13.111111, 3);
 * // three = -13.111
 *
 * const four = truncDecimals(-13.9999999, 3);
 * // four = -13.9999
 * ```
 *
 * @category Rounding
 */
export const truncDecimals = (number: number, decimalPlaces: number): number =>
    decimalAdjust(number, decimalPlaces, truncNumber);
