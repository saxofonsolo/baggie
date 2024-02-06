/**
 * Get volume of a cuboid.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getCuboidVolume } from "@baggie/core";
 *
 * const x = 10;
 * const y = 20;
 * const z = 30;
 * const volume = getCuboidVolume(x, y, z);
 * // volume = 6000
 * ```
 */
export function getCuboidVolume(x: number, y: number, z: number): number {
    return x * y * z;
}
