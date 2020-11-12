import { getCircleSurface } from "../..";

/**
 * Get surface area of a cylinder.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getCylinderSurface } from "@baggie/math";
 *
 * const radius = 10;
 * const height = 20;
 * const volume = getCylinderSurface(radius, height);
 * // volume = 1884.9555921538758
 *
 * const volumeWithoutEnds = getCylinderSurface(radius, height, true);
 * // volume = 1256.6370614359173
 * ```
 *
 * @category Geometry - Cylinder
 */
export const getCylinderSurface = (
    radius: number,
    height: number,
    excludeEnds = false
): number =>
    Math.PI * (radius * 2) * height +
    (excludeEnds ? 0 : 2 * getCircleSurface(radius));
