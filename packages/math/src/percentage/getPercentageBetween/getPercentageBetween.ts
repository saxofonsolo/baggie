/**
 * Get the position between two numbers as a percentage.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getPercentageBetween } from "@baggie/math";
 *
 * const percentage = getPercentageBetween(0, 10, 5);
 * // percentage = 0.5
 *
 * const percentage = getPercentageBetween(10, 20, 20);
 * // percentage = 1
 *
 * const percentage = getPercentageBetween(-1, 1, 0);
 * // percentage = 0.5
 * ```
 *
 * @category Percentage
 */
export const getPercentageBetween = (
    from: number,
    to: number,
    position: number,
): number => (position - from) / (to - from);
