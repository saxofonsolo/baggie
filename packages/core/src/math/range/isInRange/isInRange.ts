import { Range } from "../_interfaces/range.interface";
import { normalizeRanges } from "../_helpers/normalizeRanges";

/**
 * Check if a number is within the range of a minimum and maximum value.
 */
export function isInRange(number: number, ranges: Range | Range[]): boolean {
    return normalizeRanges(ranges).reduce<boolean>(
        (inRange, { from, to }) => inRange || (number >= from && number <= to),
        false,
    );
}
