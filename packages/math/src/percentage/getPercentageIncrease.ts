/**
 * Get the increase from one value to another in percentage.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getPercentageIncrease } from "@baggie/math";
 *
 * const startingValue = 10;
 * const finalValue = 100;
 *
 * const increase = getPercentageIncrease(startingValue, finalValue);
 * // increase = 900
 * ```
 *
 * @example
 * **Percentage decrease:**
 * ```ts
 * import { getPercentageIncrease } from "@baggie/math";
 *
 * const startingValue = 100;
 * const finalValue = 10;
 *
 * const increase = getPercentageIncrease(startingValue, finalValue);
 * // increase = -90
 * ```
 *
 * @category Percentage
 */
export const getPercentageIncrease = (
    startingValue: number,
    finalValue: number
): number => ((finalValue - startingValue) / startingValue) * 100 || 0;
