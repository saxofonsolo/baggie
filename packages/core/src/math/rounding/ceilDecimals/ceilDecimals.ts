import { decimalAdjust } from "../_helpers/decimalAdjust.helper";

/**
 * Round up a number to the nearest decimal places.
 */
export function ceilDecimals(number: number, maxDecimalPlaces: number): number {
    return decimalAdjust(number, maxDecimalPlaces, Math.ceil);
}
