import { decimalAdjust } from "../_helpers/decimalAdjust.helper";

/**
 * Truncate a number to the nearest decimal places.
 */
export const truncDecimals = (
    number: number,
    maxDecimalPlaces: number,
): number => decimalAdjust(number, maxDecimalPlaces, Math.trunc);
