/**
 * Add an array of numbers together.
 */
export const addNumbers = (numbers: number[]): number =>
    [...numbers].reduce((a: number, b: number) => a + b, 0);
