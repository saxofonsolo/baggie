import { toNearestMultipleOf } from "./_helpers/toNearestMultipleOf.helper";

/**
 * Round down a number to the next number multiple of X.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { floorToMultipleOf } from "@baggie/math";
 *
 * const five = floorToMultipleOf(13.345, 5);
 * // five = 10
 *
 * const ten = floorToMultipleOf(11, 10);
 * // ten = 10
 * ```
 *
 * @category Rounding
 */
export const floorToMultipleOf = (number: number, nearest: number): number =>
    toNearestMultipleOf(number, nearest, Math.floor, floorToMultipleOf);
