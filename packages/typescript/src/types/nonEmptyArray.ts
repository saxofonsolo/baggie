/**
 * Require an array to not be empty.
 *
 * @remarks
 * This type comes from here: https://stackoverflow.com/a/56006703/1446188
 *
 * @example
 * ```ts
 * import { NonEmptyArray } from "@baggie/typescript";
 *
 * const addNumbers = (numbers: NonEmptyArray<number>): number =>
 *     numbers.reduce((a, b) => a + b, 0);
 * ```
 */
export type NonEmptyArray<T> = [T, ...T[]];
