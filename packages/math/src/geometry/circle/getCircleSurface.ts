/**
 * Get surface area of a circle from its radius.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getCircleSurface } from "@baggie/math";
 *
 * const surface = getCircleSurface(10);
 * // surface = 314.1592653589793
 * ```
 *
 * @category Geometry - Circle
 */
export const getCircleSurface = (radius: number): number =>
    Math.PI * radius * radius;
