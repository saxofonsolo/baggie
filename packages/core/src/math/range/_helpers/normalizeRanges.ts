import { Range } from "../_interfaces/range.interface";

export const normalizeRanges = (
    ranges: Range | Range[],
): { from: number; to: number }[] =>
    (!Array.isArray(ranges) || typeof ranges[0] === "number"
        ? [ranges as Range]
        : (ranges as Range[])
    ).map((interval) =>
        Array.isArray(interval)
            ? { from: interval[0], to: interval[1] }
            : interval,
    );
