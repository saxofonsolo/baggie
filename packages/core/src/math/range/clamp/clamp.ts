/**
 * Make sure a number is within the range of a minimum and maximum value.
 */
export function clamp(
    input: number,
    limits: {
        min?: number;
        max?: number;
    },
): number {
    return Math.min(
        limits.max ?? Infinity,
        Math.max(limits.min ?? -Infinity, input),
    );
}
