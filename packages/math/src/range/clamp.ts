/**
 * Make sure a number is within the range of a minimum and maximum value.
 *
 * If the number is smaller or larger, the nearest accepted value will be
 * returned.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { clamp } from "@baggie/math";
 *
 * const smallNumber = clamp(1, 25, 75);
 * // smallNumber = 25
 *
 * const largeNumber = clamp(100, 25, 75);
 * // largeNumber = 75
 *
 * const mediumNumber = clamp(50, 25, 75);
 * // mediumNumber = 50
 * ```
 *
 * @category Range
 */
export const clamp = (input: number, min: number, max: number): number =>
    Math.min(max, Math.max(min, input));
