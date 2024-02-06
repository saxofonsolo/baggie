/**
 * Get the surface area of a cuboid.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getCuboidArea } from "@baggie/core";
 *
 * const x = 10;
 * const y = 20;
 * const z = 30;
 * const surfaceArea = getCuboidArea(x, y, z);
 * // surfaceArea = 2200
 * ```
 */
export function getCuboidArea(x: number, y: number, z: number): number {
    return (x * y + x * z + y * z) * 2;
}
