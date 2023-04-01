import { decimalAdjust } from "../_helpers/decimalAdjust.helper";

/**
 * Round up a number to the nearest decimal places.
 */
export const ceilDecimals = (
    number: number,
    maxDecimalPlaces: number,
): number => decimalAdjust(number, maxDecimalPlaces, Math.ceil);
