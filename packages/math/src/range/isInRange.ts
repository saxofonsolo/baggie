import { NonEmptyArray } from "@baggie/core";

/**
 * Check if a number is within the range of a minimum and maximum value.
 *
 * The function accepts multiple ranges to check the number against, and
 * returns `true` if it is within the bounds of at least one of them.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { isInRange } from "@baggie/math";
 *
 * const smallNumber = isInRange(1, [25, 75]);
 * // smallNumber = false
 *
 * const largeNumber = isInRange(100, [25, 75]);
 * // largeNumber = false
 *
 * const mediumNumber = isInRange(50, [25, 75]);
 * // mediumNumber = true
 *
 * const multiRangeNumber1 = isInRange(10, [0, 9], [11, 20]);
 * // multiRangeNumber1 = false
 *
 * const multiRangeNumber2 = isInRange(10, [5, 15], [20, 30]);
 * // multiRangeNumber2 = true
 * ```
 *
 * @category Range
 */
export const isInRange = (
    number: number,
    ...ranges: NonEmptyArray<[number, number]>
): boolean =>
    ranges.reduce<boolean>(
        (inRange: boolean, range: number[]) =>
            inRange || (number >= range[0] && number <= range[1]),
        false
    );
