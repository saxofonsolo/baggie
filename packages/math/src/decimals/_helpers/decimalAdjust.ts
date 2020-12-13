import { isNumberRound } from "../isNumberRound";

/**
 * Helper for rounding with decimal points.
 *
 * @category Decimals
 */
export const decimalAdjust = (
    number: number,
    decimalPlaces: number,
    func: (number: number) => number
): number => {
    if (isNumberRound(number, decimalPlaces || 0)) {
        return number;
    }

    const p = Math.pow(10, decimalPlaces || 0);
    const m = number * p * (1 + Number.EPSILON);
    return func(m) / p;
};
