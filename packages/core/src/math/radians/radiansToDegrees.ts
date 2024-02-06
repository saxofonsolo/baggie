/**
 * Convert radians to degrees.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { radiansToDegrees } from "@baggie/core";
 *
 * const radians = 100;
 * const degrees = radiansToDegrees(degrees);
 * // degrees = 5729.5779513082325
 * ```
 */
export function radiansToDegrees(radians: number): number {
    return (radians * 180) / Math.PI;
}
