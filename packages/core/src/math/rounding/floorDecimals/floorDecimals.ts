import { decimalAdjust } from "../_helpers/decimalAdjust.helper";

/**
 * Round down a number to the nearest decimal places.
 */
export function floorDecimals(
    number: number,
    maxDecimalPlaces: number,
): number {
    return decimalAdjust(number, maxDecimalPlaces, Math.floor);
}
