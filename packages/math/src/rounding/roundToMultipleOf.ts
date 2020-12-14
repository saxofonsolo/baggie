import { toNearestMultipleOf } from "./_helpers/toNearestMultipleOf.helper";

/**
 * Round down a number to the next number multiple of X.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { roundToMultipleOf } from "@baggie/math";
 *
 * const five = roundToMultipleOf(13.345, 5);
 * // five = 15
 *
 * const ten = roundToMultipleOf(11, 10);
 * // ten = 10
 * ```
 *
 * @category Rounding
 */
export const roundToMultipleOf = (number: number, nearest: number): number =>
    toNearestMultipleOf(number, nearest, Math.round, roundToMultipleOf);
