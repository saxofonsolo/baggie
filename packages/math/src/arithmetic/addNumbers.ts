import { NonEmptyArray } from "@baggie/typescript";

/**
 * Add an array of numbers together.
 *
 * @example
 * ```ts
 * import { addNumbers } from "@baggie/math";
 *
 * const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * const total = addNumbers(numbers);
 * // total = 45
 * ```
 *
 * @param numbers - An array of numbers to add together
 */
export const addNumbers = (numbers: NonEmptyArray<number>): number =>
    numbers.reduce((a, b) => a + b, 0);
