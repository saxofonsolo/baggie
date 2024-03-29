/**
 * Convert degrees to radians.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { degreesToRadians } from "@baggie/core";
 *
 * const degrees = 360;
 * const radians = degreesToRadians(degrees);
 * // radians = 6.283185307179586
 * ```
 */
export function degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
}
