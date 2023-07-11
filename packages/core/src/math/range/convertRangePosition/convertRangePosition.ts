import { getPositionBetween } from "../../percentage/getPositionBetween/getPositionBetween";
import { getPercentageBetween } from "../../percentage/getPercentageBetween/getPercentageBetween";

/**
 * Convert the position in a range to the position in another range.
 */
export const convertRangePosition = (
    position: number,
    fromRange: { from: number; to: number },
    toRange: { from: number; to: number },
): number =>
    getPositionBetween(
        toRange.from,
        toRange.to,
        getPercentageBetween(position, {
            from: fromRange.from,
            to: fromRange.to,
        }),
    );
