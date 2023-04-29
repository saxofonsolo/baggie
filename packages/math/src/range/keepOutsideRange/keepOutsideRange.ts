import { mergeIntervals } from "../mergeIntervals/mergeIntervals";
import { Range } from "../_interfaces/range.interface";

/**
 * Make sure a number is outside the range of a minimum and maximum value.
 *
 * If the number is inside the range, the nearest accepted value will be
 * returned.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { keepOutsideRange } from "@baggie/math";
 *
 * const smallNumber = keepOutsideRange(30, 25, 75);
 * // smallNumber = 25
 *
 * const largeNumber = keepOutsideRange(70, 25, 75);
 * // largeNumber = 75
 *
 * const smallOutsideNumber = keepOutsideRange(1, 25, 75);
 * // smallOutsideNumber = 1
 *
 * const largeOutsideNumber = keepOutsideRange(100, 25, 75);
 * // largeOutsideNumber = 100
 * ```
 *
 * @example
 * **When the number is the midpoint in the range:**
 * ```ts
 * import { keepOutsideRange } from "@baggie/math";
 *
 * const roundUp = keepOutsideRange(5, 0, 10);
 * // roundUp = 10
 *
 * const roundDown = keepOutsideRange(5, 0, 10, true);
 * // roundDown = 0
 * ```
 */
export const keepOutsideRange = (
    number: number,
    ranges: Range | Range[],
    combineEquals = true,
): number =>
    mergeIntervals(ranges, combineEquals).reduce(
        (returnNumber, { from, to }) =>
            returnNumber > from && returnNumber < to
                ? [from, to].reduce((previous: number, current: number) => {
                      const a = Math.abs(current - returnNumber);
                      const b = Math.abs(previous - returnNumber);
                      return a <= b ? current : previous;
                  })
                : returnNumber,
        number,
    );
