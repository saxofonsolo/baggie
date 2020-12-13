/**
 * Check if a number is rounded to the desired amount of decimal places.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { isNumberRound } from "@baggie/math";
 *
 * const two = isNumberRound(13.37, 2);
 * // two = true
 *
 * const three = isNumberRound(13.375, 2);
 * // three = false
 * ```
 *
 * @category Decimals
 */
export const isNumberRound = (
    number: number,
    decimalPlaces: number
): boolean => {
    const p = Math.pow(10, decimalPlaces);
    return Math.round(number * p) / p === number;
};
