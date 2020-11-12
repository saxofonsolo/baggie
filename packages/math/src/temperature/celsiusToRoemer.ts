/**
 * Convert Celsius to Roemer.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { celsiusToRoemer } from "@baggie/math";
 *
 * const roemer = celsiusToRoemer(100);
 * // roemer = 60
 * ```
 *
 * @category Temperature
 */
export const celsiusToRoemer = (celsius: number): number =>
    celsius * (21 / 40) + 7.5;
