import { toNearestMultipleOf } from "../_helpers/toNearestMultipleOf.helper";

/**
 * Round up a number to the next number multiple of X.
 */
export const ceilToMultipleOf = (number: number, multipleOf: number): number =>
    toNearestMultipleOf(number, multipleOf, Math.ceil, ceilToMultipleOf);
