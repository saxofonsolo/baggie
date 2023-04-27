/**
 * Get the position between two numbers as a percentage.
 */
export const getPercentageBetween = (
    position: number,
    interval: {
        from: number;
        to: number;
    },
): number => (position - interval.from) / (interval.to - interval.from);
