import { mergeIntervals } from "../mergeIntervals/mergeIntervals";
import { Range } from "../_interfaces/range.interface";

/**
 * Make sure a number is outside the range of a minimum and maximum value.
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
