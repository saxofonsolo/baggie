/**
 * Get surface area of a cuboid.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getCuboidSurface } from "@baggie/math";
 *
 * const x = 10;
 * const y = 20;
 * const z = 30;
 * const surface = getCuboidSurface(x, y, z);
 * // surface = 2200
 * ```
 *
 * @category Geometry - Cuboid
 */
export const getCuboidSurface = (x: number, y: number, z: number): number =>
    (x * y + x * z + y * z) * 2;
