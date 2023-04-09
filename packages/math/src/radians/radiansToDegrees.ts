/**
 * Convert radians to degrees.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { radiansToDegrees } from "@baggie/math";
 *
 * const radians = 100;
 * const degrees = radiansToDegrees(degrees);
 * // degrees = 5729.5779513082325
 * ```
 */
export const radiansToDegrees = (radians: number): number =>
    (radians * 180) / Math.PI;
