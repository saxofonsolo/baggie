/**
 * Get the median from an array of numbers.
 *
 * The median is the middle value or, if two middle values,
 * the mean of those two with the numbers in ascending order.
 *
 * @remarks
 * This type comes from here: https://stackoverflow.com/a/56006703/1446188
 *
 * @category Types
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
export type NonEmptyArray<T> = [T, ...T[]];
