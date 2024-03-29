/**
 * Get the surface area of a sphere.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getSphereArea } from "@baggie/core";
 *
 * const surfaceArea = getSphereArea(10);
 * // surfaceArea = 1256.6370614359173
 * ```
 */
export function getSphereArea(radius: number): number {
    return Math.PI * Math.pow(radius * 2, 2);
}
