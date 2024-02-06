import { decimalAdjust } from "../_helpers/decimalAdjust.helper";

/**
 * Truncate a number to the nearest decimal places.
 */
export function truncDecimals(
    number: number,
    maxDecimalPlaces: number,
): number {
    return decimalAdjust(number, maxDecimalPlaces, Math.trunc);
}
