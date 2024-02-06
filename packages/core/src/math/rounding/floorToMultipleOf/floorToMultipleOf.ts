import { toNearestMultipleOf } from "../_helpers/toNearestMultipleOf.helper";

/**
 * Round down a number to the next number multiple of X.
 */
export function floorToMultipleOf(number: number, multipleOf: number): number {
    return toNearestMultipleOf(
        number,
        multipleOf,
        Math.floor,
        floorToMultipleOf,
    );
}
