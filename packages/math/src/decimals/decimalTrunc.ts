import { decimalAdjust } from "./_helpers/decimalAdjust.helper";
import { truncNumber } from "./truncNumber";

/**
 * Trunc a number to nearest decimal places.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { decimalTrunc } from "@baggie/math";
 *
 * const two = decimalTrunc(13.3689, 2);
 * // two = 13.36
 *
 * const three = decimalTrunc(-13.111111, 3);
 * // three = -13.111
 *
 * const four = decimalTrunc(-13.9999999, 3);
 * // four = -13.9999
 * ```
 *
 * @category Decimals
 */
export const decimalTrunc = (number: number, decimalPlaces: number): number =>
    decimalAdjust(number, decimalPlaces, truncNumber);
