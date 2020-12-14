import { toNearestMultipleOf } from "./_helpers/toNearestMultipleOf.helper";

/**
 * Round up a number to the next number multiple of X.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { ceilToMultipleOf } from "@baggie/math";
 *
 * const five = ceilToMultipleOf(13.345, 5);
 * // five = 15
 *
 * const ten = ceilToMultipleOf(11, 10);
 * // ten = 20
 * ```
 *
 * @category Rounding
 */
export const ceilToMultipleOf = (number: number, nearest: number): number =>
    toNearestMultipleOf(number, nearest, Math.ceil, ceilToMultipleOf);
