import { Bounds } from "../_interfaces/bounds.interface";
import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";

/**
 * Get the boundaries from an array of coordinates.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getBounds } from "@baggie/math";
 *
 * const coordinates = [
 *     { x: 10, y: 5 },
 *     { x: 0, y: 10 },
 *     { x: -10, y: -10 },
 * ];
 *
 * const bounds = getBounds(coordinates);
 * // bounds = { min: { x: -10, y: -10 }, max: { x: 10, y: 10 }}
 * ```
 *
 * @category Coordinates - Bounds
 */
export const getBounds = (coordinates: CoordinatesXY[]): Bounds => {
    return coordinates.reduce(
        (previous, current) => {
            const returnCoordinates = { ...previous };

            if (current.x < previous.min.x) {
                returnCoordinates.min.x = current.x;
            }

            if (current.x > previous.max.x) {
                returnCoordinates.max.x = current.x;
            }

            if (current.y < previous.min.y) {
                returnCoordinates.min.y = current.y;
            }

            if (current.y > previous.max.y) {
                returnCoordinates.max.y = current.y;
            }

            return returnCoordinates;
        },
        {
            min: {
                x: Infinity,
                y: Infinity,
            },
            max: {
                x: -Infinity,
                y: -Infinity,
            },
        }
    );
};
