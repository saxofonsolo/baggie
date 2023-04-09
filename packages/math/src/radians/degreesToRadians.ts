/**
 * Convert degrees to radians.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { degreesToRadians } from "@baggie/math";
 *
 * const degrees = 360;
 * const radians = degreesToRadians(degrees);
 * // radians = 6.283185307179586
 * ```
 */
export const degreesToRadians = (degrees: number): number =>
    (degrees * Math.PI) / 180;
