import { decimalAdjust } from "../_helpers/decimalAdjust.helper";

/**
 * Round down a number to the nearest decimal places.
 */
export const floorDecimals = (
    number: number,
    maxDecimalPlaces: number,
): number => decimalAdjust(number, maxDecimalPlaces, Math.floor);
