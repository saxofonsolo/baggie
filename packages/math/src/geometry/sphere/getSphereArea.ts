/**
 * Get the surface area of a sphere.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getSphereArea } from "@baggie/math";
 *
 * const surfaceArea = getSphereArea(10);
 * // surfaceArea = 1256.6370614359173
 * ```
 */
export const getSphereArea = (radius: number): number =>
    Math.PI * Math.pow(radius * 2, 2);
