/**
 * Get the increase from one value to another in percentage.
 */
export function getPercentageIncrease(
    from: number,
    to: number,
    percentageAsDecimal = true,
): number {
    return ((to - from) / from) * (percentageAsDecimal ? 1 : 100) || 0;
}
