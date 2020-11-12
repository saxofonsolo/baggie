/**
 * Get surface of a sphere.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getSphereSurface } from "@baggie/math";
 *
 * const surface = getSphereSurface(10);
 * // surface = 1256.6370614359173
 * ```
 *
 * @category Geometry - Sphere
 */
export const getSphereSurface = (radius: number): number =>
    Math.PI * Math.pow(radius * 2, 2);
