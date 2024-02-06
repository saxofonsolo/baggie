import { addNumbers } from "../../arithmetic/addNumbers/addNumbers";

/**
 * Get the mean value of an array of numbers.
 * This is what is most often referred to as "average".
 */
export function getMean(numbers: number[]): number {
    return addNumbers(numbers) / numbers.length;
}
