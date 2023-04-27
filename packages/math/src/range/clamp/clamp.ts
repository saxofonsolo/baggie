/**
 * Make sure a number is within the range of a minimum and maximum value.
 */
export const clamp = (
    input: number,
    minMax: {
        min: number;
        max: number;
    },
): number => Math.min(minMax.max, Math.max(minMax.min, input));
