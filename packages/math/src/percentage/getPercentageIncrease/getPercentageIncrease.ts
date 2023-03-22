/**
 * Get the increase from one value to another in percentage.
 */
export const getPercentageIncrease = (
    from: number,
    to: number,
    percentageAsDecimal = true,
): number => ((to - from) / from) * (percentageAsDecimal ? 1 : 100) || 0;
