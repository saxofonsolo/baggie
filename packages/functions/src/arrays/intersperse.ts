/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */

/**
 * Insert new values between between all values in an array.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { intersperse } from "@baggie/functions";
 *
 * const numbers = [
 *     5,
 *     10,
 *     15,
 *     20,
 * ];
 * const newNumbers = intersperse(numbers, 1);
 * // newNumbers = [5, 1, 10, 1, 15, 1, 20]
 * ```
 *
 * @example
 * **Insert multiple:**
 * ```ts
 * import { intersperse } from "@baggie/functions";
 *
 * const numbers = [
 *     5,
 *     10,
 *     15,
 *     20,
 * ];
 * const newNumbersA = intersperse(numbers, 1, 2);
 * // newNumbersA = [5, 1, 2, 10, 1, 2, 15, 1, 2, 20]
 *
 * const newNumbersB = intersperse(numbers, ...["one", "two"]);
 * // newNumbersB = [5, "one", "two", 10, "one", "two", 15, "one", "two", 20]
 * ```
 *
 * @example
 * **With a function:**
 * ```ts
 * import { intersperse } from "@baggie/functions";
 *
 * const numbers = [
 *     10,
 *     20,
 *     30,
 *     40,
 * ];
 * const insertion = ({ previous, next }) => previous + (next - previous) / 2;
 * const newNumbers = intersperse(numbers, insertion);
 * // newNumbers = [10, 15, 20, 25, 30, 35, 40]
 * ```
 *
 * @category Arrays
 */
export const intersperse = (input: any[], ...insertion: any): any[] =>
    input.reduce((accumulator: any[], element, index, array) => {
        accumulator.push(element);
        if (index < array.length - 1) {
            insertion.forEach((insert: any) =>
                accumulator.push(
                    typeof insert === "function"
                        ? insert({
                              previous: array[index],
                              next: array[index + 1],
                          })
                        : insert
                )
            );
        }
        return accumulator;
    }, []);
