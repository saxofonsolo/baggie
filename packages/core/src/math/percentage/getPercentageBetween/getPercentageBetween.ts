/**
 * Get the position between two numbers as a percentage.
 */
export function getPercentageBetween(
    position: number,
    interval: {
        from: number;
        to: number;
    },
): number {
    return (position - interval.from) / (interval.to - interval.from);
}
