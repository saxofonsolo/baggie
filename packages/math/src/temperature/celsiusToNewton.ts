/**
 * Convert Celsius to Newton.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { celsiusToNewton } from "@baggie/math";
 *
 * const newton = celsiusToNewton(100);
 * // newton = 33
 * ```
 *
 * @category Temperature
 */
export const celsiusToNewton = (celsius: number): number =>
    (celsius * 33) / 100;
