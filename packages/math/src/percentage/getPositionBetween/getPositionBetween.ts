/**
 * Get the position between two numbers from a percentage.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getPositionBetween } from "@baggie/math";
 *
 * const position = getPositionBetween(0, 10, 0.5);
 * // position = 5
 *
 * const position = getPositionBetween(10, 20, 0.5);
 * // position = 15
 *
 * const position = getPositionBetween(-1, 1, 0.5);
 * // position = 0
 * ```
 *
 * @category Percentage
 */
export const getPositionBetween = (
    from: number,
    to: number,
    percentage: number,
): number => from + (to - from) * percentage;
