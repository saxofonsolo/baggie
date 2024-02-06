import { nonNumberFallback } from "../nonNumberFallback/nonNumberFallback";

/**
 * Return 0 if input is not and can't be converted into a number.
 */
export function zeroIfNotNumber(value: any): number {
    return nonNumberFallback(value, 0);
}
