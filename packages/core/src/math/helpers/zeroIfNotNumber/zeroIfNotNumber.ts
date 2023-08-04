import { nonNumberFallback } from "../nonNumberFallback/nonNumberFallback";

/**
 * Return 0 if input is not and can't be converted into a number.
 */
export const zeroIfNotNumber = (value: any): number =>
    nonNumberFallback(value, 0);
