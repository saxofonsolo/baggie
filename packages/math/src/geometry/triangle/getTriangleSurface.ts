import { getTrianglePerimeter } from "../..";

/**
 * Get surface area of a triangle.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getTriangleSurface } from "@baggie/math";
 *
 * const a = 10;
 * const b = 15;
 * const c = 20;
 * const surface = getTriangleSurface(a, b, c);
 * // surface = 205.3959590644373getTrianglePerimeter
 * ```
 *
 * @category Geometry - Triangle
 */
export const getTriangleSurface = (a: number, b: number, c: number): number => {
    const semiperimeter = getTrianglePerimeter(a, b, c) / 2;
    return Math.sqrt(
        semiperimeter *
            (-a + b + c) *
            (a - b + c) *
            (a + b - c)
    );
};
