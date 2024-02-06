/**
 * Get volume of a cylinder.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getCylinderVolume } from "@baggie/core";
 *
 * const radius = 10;
 * const height = 20;
 * const volume = getCylinderVolume(radius, height);
 * // volume = 6283.185307179587
 * ```
 */
export function getCylinderVolume(radius: number, height: number): number {
    return Math.PI * radius * radius * height;
}
