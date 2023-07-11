import { zeroIfNotNumber } from "../helpers/zeroIfNotNumber/zeroIfNotNumber";
import { CoordinatesXY } from "./_interfaces/coordinatesXY.interface";

/**
 * Convert a single number or an array with two numbers to a set of coordinates.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { convertToCoordinates } from "@baggie/core";
 *
 * const number = convertToCoordinates(10);
 * // number = { x: 10, y: 10 }
 *
 * const array = convertToCoordinates([10, 20]);
 * // array = { x: 10, y: 20 }
 *
 * const object = convertToCoordinates({ x: 10, y: 20 });
 * // object = { x: 10, y: 20 }
 *
 * const nothing = convertToCoordinates();
 * // nothing = { x: 0, y: 0 }
 * ```
 */
export const convertToCoordinates = (
    coordinates?: number | [x: number, y: number] | CoordinatesXY,
): CoordinatesXY =>
    typeof coordinates === "object" &&
    Object.prototype.hasOwnProperty.call(coordinates, "x") &&
    Object.prototype.hasOwnProperty.call(coordinates, "y")
        ? {
              x: zeroIfNotNumber((coordinates as CoordinatesXY).x),
              y: zeroIfNotNumber((coordinates as CoordinatesXY).y),
          }
        : Array.isArray(coordinates)
        ? {
              x: zeroIfNotNumber(coordinates[0]),
              y: zeroIfNotNumber(coordinates[1]),
          }
        : {
              x: zeroIfNotNumber(coordinates),
              y: zeroIfNotNumber(coordinates),
          };
