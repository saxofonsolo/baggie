import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";
import { isInsideRadius } from "./isInsideRadius";

/**
 * If a set of coordinates are outside a specified radius from the origin (0,0),
 * return the nearest set of coordinates inside the radius.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { keepInsideRadius } from "@baggie/math";
 *
 * const position = { x: 20, y: 0 };
 *
 * const radiusA = 100;
 * const newPositionA = keepInsideRadius(position, radiusA);
 * // newPositionA = { x: 20, y: 0 }
 *
 * const radiusB = 10;
 * const newPositionB = keepInsideRadius(position, radiusB);
 * // newPositionB = { x: 10, y: 0 }
 * ```
 */
export const keepInsideRadius = (
    position: CoordinatesXY,
    radius: number,
): CoordinatesXY => {
    if (isInsideRadius(position, radius)) {
        return position;
    }

    const radians = Math.atan2(position.y, position.x);
    return {
        x: Math.cos(radians) * radius,
        y: Math.sin(radians) * radius,
    };
};
