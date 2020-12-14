import { CoordinatesXY } from "./_interfaces/coordinatesXY.interface";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const returnZeroIfNotNumber = (value: any): number =>
    typeof value === "number"
        ? value
        : typeof value === "string"
        ? parseInt(value, 10) || 0
        : 0;

/**
 * Convert a single number or an array with two numbers to a set of coordinates.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { convertToCoordinates } from "@baggie/math";
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
 *
 * @category Coordinates
 */
export const convertToCoordinates = (
    coordinates?: number | [number, number] | CoordinatesXY
): CoordinatesXY =>
    typeof coordinates === "object" &&
    Object.prototype.hasOwnProperty.call(coordinates, "x") &&
    Object.prototype.hasOwnProperty.call(coordinates, "y")
        ? {
              x: returnZeroIfNotNumber((coordinates as CoordinatesXY).x),
              y: returnZeroIfNotNumber((coordinates as CoordinatesXY).y),
          }
        : Array.isArray(coordinates)
        ? {
              x: returnZeroIfNotNumber(coordinates[0]),
              y: returnZeroIfNotNumber(coordinates[1]),
          }
        : {
              x: returnZeroIfNotNumber(coordinates),
              y: returnZeroIfNotNumber(coordinates),
          };
