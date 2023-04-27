/**
 * Make sure a number is within the range of a minimum and maximum value.
 */
export const clamp = (
    input: number,
    limits: {
        min?: number;
        max?: number;
    },
): number =>
    Math.min(limits.max ?? Infinity, Math.max(limits.min ?? -Infinity, input));
