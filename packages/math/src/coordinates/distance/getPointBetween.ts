import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";

/**
 * Get a point between two sets of coordinates.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getPointBetween } from "@baggie/math";
 *
 * const from = { x: 10, y: 10 };
 * const to = { x: 20, y: 20 };
 * const progress = .5;
 *
 * const point = getPointBetween(from, to, progress);
 * // point = { x: 15, y: 15 }
 * ```
 *
 * @category Coordinate - Distance
 */
export const getPointBetween = (
    from: CoordinatesXY,
    to: CoordinatesXY,
    progress = 0.5,
): CoordinatesXY => ({
    x: from.x + (to.x - from.x) * progress,
    y: from.y + (to.y - from.y) * progress,
});
