import { getCircleArea } from "../circle/getCircleArea/getCircleArea";

/**
 * Get the surface area of a cone.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getConeArea } from "@baggie/math";
 *
 * const radius = 10;
 * const height = 20;
 * const area = getConeArea(radius, height);
 * // area = 942.4777960769379
 *
 * const areaWithoutBottom = getConeArea(radius, height, true);
 * // areaWithoutBottom = 628.3185307179587
 * ```
 */
export const getConeArea = (
    radius: number,
    height: number,
    excludeBottom = false,
): number =>
    Math.PI * radius * height + (excludeBottom ? 0 : getCircleArea(radius));
