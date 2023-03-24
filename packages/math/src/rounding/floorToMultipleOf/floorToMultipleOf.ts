import { toNearestMultipleOf } from "../_helpers/toNearestMultipleOf.helper";

/**
 * Round down a number to the next number multiple of X.
 */
export const floorToMultipleOf = (number: number, nearest: number): number =>
    toNearestMultipleOf(number, nearest, Math.floor, floorToMultipleOf);
