/**
 * Get an array of angles sorted by which is closest to the target.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getClosest } from "@baggie/math";
 *
 * const target = 8;
 * const numbers = [
 *     5,
 *     10,
 *     15,
 *     20,
 * ];
 * const sorted = getClosest(target, numbers);
 * // sorted = [10, 8, 15, 20]
 * ```
 *
 * @category Arithmetic
 */
export const getClosest = (target: number, array: number[]): number[] =>
    [...array].sort(
        (a: number, b: number) => Math.abs(target - a) - Math.abs(target - b)
    );
