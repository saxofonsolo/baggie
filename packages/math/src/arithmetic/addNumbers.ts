import { NonEmptyArray } from "@baggie/typescript";

/**
 * Add an array of numbers together.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { addNumbers } from "@baggie/math";
 *
 * const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * const total = addNumbers(numbers);
 * // total = 45
 * ```
 *
 * @category Arithmetic
 * @param numbers - An array of numbers to add together
 */
export const addNumbers = (numbers: NonEmptyArray<number>): number =>
    numbers.reduce((a: number, b: number) => a + b, 0);
