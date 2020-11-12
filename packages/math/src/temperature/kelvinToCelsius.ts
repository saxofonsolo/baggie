/**
 * Convert Kelvin to Celsius.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { kelvinToCelsius } from "@baggie/math";
 *
 * const celsius = kelvinToCelsius(373.15);
 * // celsius = 100
 * ```
 *
 * @category Temperature
 */
export const kelvinToCelsius = (kelvin: number): number => kelvin - 273.15;
