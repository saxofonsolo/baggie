import { getTrianglePerimeter } from "./getTrianglePerimeter";

/**
 * Get the surface area of a triangle.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getTriangleArea } from "@baggie/core";
 *
 * const a = 10;
 * const b = 15;
 * const c = 20;
 * const surfaceArea = getTriangleArea(a, b, c);
 * // surfaceArea = 205.3959590644373
 * ```
 */
export const getTriangleArea = (a: number, b: number, c: number): number => {
    const semiPerimeter = getTrianglePerimeter(a, b, c) / 2;
    return Math.sqrt(semiPerimeter * (-a + b + c) * (a - b + c) * (a + b - c));
};
