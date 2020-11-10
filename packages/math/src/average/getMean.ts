import { NonEmptyArray } from "@baggie/typescript";
import { addNumbers } from "..";

/**
 * Get the mean from an array of numbers. This is what is most often referred to as "average".
 *
 * All the values are added together and divided by the amount of numbers.
 *
 * @example
 * import { getMean } from "./utils/calc/average";
 *
 * const numbers = [4, 8, 15, 16, 23, 42];
 * const average = getMean(numbers); // 18
 */
export const getMean = (numbers: NonEmptyArray<number>): number =>
    addNumbers(numbers) / numbers.length;
