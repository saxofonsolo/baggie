import { getPositionBetween } from "../percentage/getPositionBetween";
import { getPercentageBetween } from "../percentage/getPercentageBetween";

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
 *
 * @category Range
 */
export const convertRangePosition = (
    input: { from: number; to: number; position: number },
    output: { from: number; to: number }
): number =>
    getPositionBetween(
        output.from,
        output.to,
        getPercentageBetween(input.from, input.to, input.position)
    );
