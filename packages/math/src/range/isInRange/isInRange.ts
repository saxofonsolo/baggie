/**
 * Check if a number is within the range of a minimum and maximum value.
 */
export const isInRange = (
    number: number,
    ...ranges: ([number, number] | { from: number; to: number })[]
): boolean =>
    ranges.reduce<boolean>((inRange, range) => {
        const from = Array.isArray(range) ? range[0] : range.from;
        const to = Array.isArray(range) ? range[1] : range.to;
        return inRange || (number >= from && number <= to);
    }, false);
