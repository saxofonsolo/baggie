/**
 * Get surface of a rectangle.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getRectangleSurface } from "@baggie/math";
 *
 * const x = 10;
 * const y = 20;
 * const surface = getRectangleSurface(x, y);
 * // surface = 200
 * ```
 *
 * @category Geometry - Rectangle
 */
export const getRectangleSurface = (x: number, y: number): number => x * y;
