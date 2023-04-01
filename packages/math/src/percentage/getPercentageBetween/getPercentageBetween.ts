/**
 * Get the position between two numbers as a percentage.
 */
export const getPercentageBetween = (
    from: number,
    to: number,
    position: number,
): number => (position - from) / (to - from);
