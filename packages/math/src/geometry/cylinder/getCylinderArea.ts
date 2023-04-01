import { getCircleArea } from "../circle/getCircleArea/getCircleArea";

/**
 * Get the surface area of a cylinder.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getCylinderArea } from "@baggie/math";
 *
 * const radius = 10;
 * const height = 20;
 * const area = getCylinderArea(radius, height);
 * // area = 1884.9555921538758
 *
 * const areaWithoutEnds = getCylinderArea(radius, height, true);
 * // area = 1256.6370614359173
 * ```
 *
 * @category Geometry - Cylinder
 */
export const getCylinderArea = (
    radius: number,
    height: number,
    excludeEnds = false,
): number =>
    Math.PI * (radius * 2) * height +
    (excludeEnds ? 0 : 2 * getCircleArea(radius));
