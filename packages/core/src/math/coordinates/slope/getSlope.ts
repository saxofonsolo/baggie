import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";

/**
 * Get the slope of a line (also called a gradient).
 *
 * @remarks
 * The slope of a line is a number that measures its "steepness",
 * usually denoted by the letter m.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getSlope } from "@baggie/core";
 *
 * const from = { x: 0, y: 0 };
 * const to = { x: 20, y: 30 };
 * const slope = getSlope(from, to);
 * // slope = 1.5
 * ```
 */
export const getSlope = (from: CoordinatesXY, to: CoordinatesXY): number =>
    (to.y - from.y) / (to.x - from.x) || 0;
