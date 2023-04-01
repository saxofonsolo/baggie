import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";

/**
 * Check if a set of coordinates is inside a radius from the origin (0,0)
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { isInsideRadius } from "@baggie/math";
 *
 * const position = { x: 20, y: 30 };
 *
 * const radiusA = 100;
 * const checkA = isInsideRadius(position, radiusA);
 * // checkA = true
 *
 * const radiusB = 35;
 * const checkB = isInsideRadius(position, radiusB);
 * // checkB = false
 * ```
 *
 * @category Coordinates - Radius
 */
export const isInsideRadius = (
    position: CoordinatesXY,
    radius: number,
): boolean =>
    Math.sqrt(position.x * position.x + position.y * position.y) < radius;
