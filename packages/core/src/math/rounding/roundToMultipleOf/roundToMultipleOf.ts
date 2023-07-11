import { toNearestMultipleOf } from "../_helpers/toNearestMultipleOf.helper";

/**
 * Round a number to the next number multiple of X.
 */
export const roundToMultipleOf = (number: number, multipleOf: number): number =>
    toNearestMultipleOf(number, multipleOf, Math.round, roundToMultipleOf);
