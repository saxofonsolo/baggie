import { decimalAdjust } from "../_helpers/decimalAdjust.helper";

/**
 * Truncate a number to the nearest decimal places.
 */
export const truncDecimals = (number: number, decimalPlaces: number): number =>
    decimalAdjust(number, decimalPlaces, Math.trunc);
