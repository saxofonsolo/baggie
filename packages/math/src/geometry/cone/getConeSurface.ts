import { getCircleSurface } from "../..";

/**
 * Get surface area of a cone.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getConeSurface } from "@baggie/math";
 *
 * const radius = 10;
 * const height = 20;
 * const surface = getConeSurface(radius, height);
 * // surface = 942.4777960769379
 *
 * const surfaceWithoutBottom = getConeSurface(radius, height, true);
 * // surface = 628.3185307179587
 * ```
 *
 * @category Geometry - Cone
 */
export const getConeSurface = (
    radius: number,
    height: number,
    excludeBottom = false
): number =>
    Math.PI * radius * height + (excludeBottom ? 0 : getCircleSurface(radius));
