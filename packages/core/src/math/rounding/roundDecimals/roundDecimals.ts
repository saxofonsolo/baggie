import { decimalAdjust } from "../_helpers/decimalAdjust.helper";

/**
 * Round a number to the nearest decimal places.
 */
export function roundDecimals(
    number: number,
    maxDecimalPlaces: number,
): number {
    return decimalAdjust(number, maxDecimalPlaces, Math.round);
}
