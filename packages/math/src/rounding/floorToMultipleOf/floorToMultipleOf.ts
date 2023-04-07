import { toNearestMultipleOf } from "../_helpers/toNearestMultipleOf.helper";

/**
 * Round down a number to the next number multiple of X.
 */
export const floorToMultipleOf = (number: number, multipleOf: number): number =>
    toNearestMultipleOf(number, multipleOf, Math.floor, floorToMultipleOf);
