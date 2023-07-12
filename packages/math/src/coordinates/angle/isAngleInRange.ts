import { NonEmptyArray } from "@baggie/core";

/**
 * Check if an angle is within one or multiple ranges of angles.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { isAngleInRange } from "@baggie/math";
 *
 * const checkA = isAngleInRange(10, [5, 15]);
 * // checkA = true
 *
 * const checkB = isAngleInRange(300, [100, 200]);
 * // checkB = false
 *
 * const checkC = isAngleInRange(360, [100, 1]);
 * // checkC = true
 *
 * const checkD = isAngleInRange(360, [100, -1]);
 * // checkD = false
 * ```
 *
 * @category Coordinates - Angle
 */
export const isAngleInRange = (
    angle: number,
    ...ranges: NonEmptyArray<[number, number]>
): boolean =>
    ranges.reduce<boolean>((inRange: boolean, range: [number, number]) => {
        if (inRange) return inRange;

        const [from, to] = range;

        if (from > to) {
            return (
                (angle >= -(360 % from) && angle <= to) ||
                (angle >= from && angle <= 360 + to)
            );
        }

        return angle >= from && angle <= to;
    }, false);
