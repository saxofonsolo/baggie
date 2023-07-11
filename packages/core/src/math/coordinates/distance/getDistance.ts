import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";

/**
 * Get the distance between two sets of coordinates.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getDistance } from "@baggie/core";
 *
 * const from = { x: 10, y: 30 };
 * const to = { x: 20, y: 30 };
 *
 * const distance = getDistance(from, to);
 * // distance = 10
 * ```
 */
export const getDistance = (from: CoordinatesXY, to: CoordinatesXY): number =>
    Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
