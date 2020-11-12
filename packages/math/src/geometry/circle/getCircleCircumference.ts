/**
 * Get circumference (perimeter) of a circle from its radius.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getCircleCircumference } from "@baggie/math";
 *
 * const circumference = getCircleCircumference(100);
 * // circumference = 628.3185307179587
 * ```
 *
 * @category Geometry - Circle
 */
export const getCircleCircumference = (radius: number): number =>
    2 * Math.PI * radius;
