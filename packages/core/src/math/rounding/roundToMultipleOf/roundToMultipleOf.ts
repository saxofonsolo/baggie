import { toNearestMultipleOf } from "../_helpers/toNearestMultipleOf.helper";

/**
 * Round a number to the next number multiple of X.
 */
export function roundToMultipleOf(number: number, multipleOf: number): number {
    return toNearestMultipleOf(
        number,
        multipleOf,
        Math.round,
        roundToMultipleOf,
    );
}
