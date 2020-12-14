import { countDecimals } from "../../arithmetic/countDecimals";

/**
 * @internal
 */
export const toNearestMultipleOf = (
    number: number,
    nearest: number,
    func: (number: number) => number,
    self: (number: number, nearest: number) => number
): number => {
    const decimalCount = countDecimals(nearest);
    const decimalMultiplier = decimalCount * 10;
    return !decimalCount
        ? func(number / nearest) * nearest
        : self(number * decimalMultiplier, nearest * decimalMultiplier) /
              decimalMultiplier;
};
