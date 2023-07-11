import { decimalAdjust } from "../_helpers/decimalAdjust.helper";

/**
 * Round a number to the nearest decimal places.
 */
export const roundDecimals = (
    number: number,
    maxDecimalPlaces: number,
): number => decimalAdjust(number, maxDecimalPlaces, Math.round);
