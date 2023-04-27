import { getPositionBetween } from "../../percentage/getPositionBetween/getPositionBetween";
import { getPercentageBetween } from "../../percentage/getPercentageBetween/getPercentageBetween";

/**
 * Convert the position in a range to the position in another range.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { convertRangePosition } from "@baggie/math";
 *
 * const inputRange = {
 *     from: 0,
 *     to: 10,
 *     position: 5,
 * };
 *
 * const outputRange = {
 *     from: -10,
 *     to: 0,
 * };
 *
 * const newPosition = convertRangePosition(inputRange, outputRange);
 * // newPosition = -5
 * ```
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
