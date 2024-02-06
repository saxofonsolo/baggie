/**
 * Get the position between two numbers from a percentage.
 */
export function getPositionBetween(
    from: number,
    to: number,
    percentage: number,
): number {
    return from + (to - from) * percentage;
}
