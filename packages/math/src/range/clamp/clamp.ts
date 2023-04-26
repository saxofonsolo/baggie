/**
 * Make sure a number is within the range of a minimum and maximum value.
 */
export const clamp = (input: number, min: number, max: number): number =>
    Math.min(max, Math.max(min, input));
