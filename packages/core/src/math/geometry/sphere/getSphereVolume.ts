/**
 * Get volume of a sphere.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getSphereVolume } from "@baggie/core";
 *
 * const volume = getSphereVolume(10);
 * // volume = 4188.790204786391
 * ```
 */
export function getSphereVolume(radius: number): number {
    return (Math.PI * Math.pow(radius * 2, 3)) / 6;
}
