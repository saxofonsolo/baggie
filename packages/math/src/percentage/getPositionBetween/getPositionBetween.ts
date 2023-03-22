/**
 * Get the position between two numbers from a percentage.
 */
export const getPositionBetween = (
    from: number,
    to: number,
    percentage: number,
): number => from + (to - from) * percentage;
