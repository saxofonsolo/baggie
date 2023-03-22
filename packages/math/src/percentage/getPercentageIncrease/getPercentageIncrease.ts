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
 * // increase = 9 (900%)
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
 * // increase = -0.9 (-90%)
 * ```
 *
 * @category Percentage
 */
export const getPercentageIncrease = (
    startingValue: number,
    finalValue: number,
    percentageAsDecimal = true,
): number =>
    ((finalValue - startingValue) / startingValue) *
        (percentageAsDecimal ? 1 : 100) || 0;
