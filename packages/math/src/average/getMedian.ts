import { NonEmptyArray } from "@baggie/typescript";
import { getMean } from "./getMean";

/**
 * Get the median from an array of numbers.
 *
 * The median is the middle value or, if two middle values,
 * the mean of those two with the numbers in ascending order.
 *
 * @category Average
 *
 * @example
 * ```ts
 * import { getMedian } from "@baggie/math";
 *
 * const numbers = [4, 8, 15, 16, 23, 42];
 * const median = getMedian(numbers);
 * // median = 16
 * ```
 */
export const getMedian = (numbers: NonEmptyArray<number>): number => {
    const numbersCount = numbers.length;
    const halfOfNumbersCount = Math.floor(numbersCount / 2);

    // Put the array of numbers in ascending order (small to large)
    numbers.sort((a: number, b: number) => a - b);

    return !(numbersCount % 2)
        ? // If the amount of numbers is even, the median is the mean of the two middle numbers
          getMean([
              numbers[halfOfNumbersCount - 1],
              numbers[halfOfNumbersCount],
          ])
        : // If the amount of numbers is odd, the median is the middle number
          numbers[halfOfNumbersCount];
};
