import { Range } from "../_interfaces/range.interface";
import { normalizeRanges } from "../_helpers/normalizeRanges";

/**
 * Merge and combine overlapping intervals.
 */
export function mergeIntervals(
    intervals: Range | Range[],
    combineEquals = true,
) {
    const intervalArrays = normalizeRanges(intervals);

    if (intervalArrays.length < 2) return intervalArrays;

    intervalArrays.sort((a, b) => a.from - b.from);

    const result: { from: number; to: number }[] = [];
    let previous = intervalArrays[0];

    for (let i = 1; i < intervalArrays.length; i += 1) {
        if (
            combineEquals
                ? previous.to >= intervalArrays[i].from
                : previous.to > intervalArrays[i].from
        ) {
            previous = {
                from: previous.from,
                to: Math.max(previous.to, intervalArrays[i].to),
            };
        } else {
            result.push(previous);
            previous = intervalArrays[i];
        }
    }

    result.push(previous);

    return result;
}
