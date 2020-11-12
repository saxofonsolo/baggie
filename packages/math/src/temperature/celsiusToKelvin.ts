/**
 * Convert Celsius to Kelvin.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { celsiusToKelvin } from "@baggie/math";
 * const kelvin = celsiusToKelvin(100);
 * // kelvin = 373.15
 * ```
 *
 * @category Temperature
 */
export const celsiusToKelvin = (celsius: number): number => celsius + 273.15;
