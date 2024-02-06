import { countDecimals } from "../../arithmetic/countDecimals/countDecimals";

/**
 * @internal
 */
export function toNearestMultipleOf(
    number: number,
    multipleOf: number,
    func: (number: number) => number,
    self: (number: number, nearest: number) => number,
): number {
    const decimalCount = countDecimals(multipleOf);
    const decimalMultiplier = decimalCount * 10;
    return !decimalCount
        ? func(number / multipleOf) * multipleOf
        : self(number * decimalMultiplier, multipleOf * decimalMultiplier) /
              decimalMultiplier;
}
