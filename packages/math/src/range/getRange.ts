/**
 * Get the range from an array of numbers.
 * This is the largest value minus the smallest value.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getRange } from "@baggie/math";
 *
 * const numbers = [4, 8, 15, 16, 23, 42];
 * const range = getRange(numbers);
 * // range = 38
 * ```
 */
export const getRange = (numbers: number[]): number => {
    // Put the array of numbers in ascending order (small to large)
    const sortedNumbers = [...numbers].sort((a: number, b: number) => a - b);

    return sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0] || 0;
};
