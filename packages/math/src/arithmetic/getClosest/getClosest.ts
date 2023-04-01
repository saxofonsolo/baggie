/**
 * Sort an array of numbers by their distance to a target number.
 */
export const getClosest = (target: number, array: number[]): number[] =>
    [...array].sort(
        (a: number, b: number) => Math.abs(target - a) - Math.abs(target - b),
    );
