import { NonEmptyArray } from "@baggie/typescript";

/**
 * Get the range from an array of numbers.
 * This is the largest value minus the smallest value.
 *
 * @example
 * ```ts
 * import { getRange } from "@baggie/math";
 *
 * const numbers = [4, 8, 15, 16, 23, 42];
 * const range = getRange(numbers);
 * // range = 38
 * ```
 *
 * @category Distance
 */
export const getRange = (numbers: NonEmptyArray<number>): number => {
    // Put the array of numbers in ascending order (small to large)
    numbers.sort((a: number, b: number) => a - b);

    return numbers[numbers.length - 1] - numbers[0];
};
