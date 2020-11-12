import { NonEmptyArray } from "@baggie/typescript";
import { addNumbers } from "..";

/**
 * Get the mean value of an array of numbers.
 * This is what is most often referred to as "average".
 *
 * All the values are added together and divided by the amount of numbers.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getMean } from "@baggie/math";
 *
 * const numbers = [4, 8, 15, 16, 23, 42];
 * const mean = getMean(numbers);
 * // mean = 18
 * ```
 *
 * @category Average
 */
export const getMean = (numbers: NonEmptyArray<number>): number =>
    addNumbers(numbers) / numbers.length;
