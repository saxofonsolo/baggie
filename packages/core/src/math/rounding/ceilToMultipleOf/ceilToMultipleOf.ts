import { toNearestMultipleOf } from "../_helpers/toNearestMultipleOf.helper";

/**
 * Round up a number to the next number multiple of X.
 */
export function ceilToMultipleOf(number: number, multipleOf: number): number {
    return toNearestMultipleOf(number, multipleOf, Math.ceil, ceilToMultipleOf);
}
