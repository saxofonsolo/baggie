import { toNearestMultipleOf } from "../_helpers/toNearestMultipleOf.helper";

/**
 * Round a number to the next number multiple of X.
 */
export const roundToMultipleOf = (number: number, nearest: number): number =>
    toNearestMultipleOf(number, nearest, Math.round, roundToMultipleOf);
