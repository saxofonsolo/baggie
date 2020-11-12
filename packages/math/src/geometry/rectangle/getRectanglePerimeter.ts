/**
 * Get perimeter of a rectangle.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getRectanglePerimeter } from "@baggie/math";
 *
 * const x = 10;
 * const y = 20;
 * const perimeter = getRectanglePerimeter(x, y);
 * // perimeter = 60
 * ```
 *
 * @category Geometry - Rectangle
 */
export const getRectanglePerimeter = (x: number, y: number): number =>
    x + x + y + y;
