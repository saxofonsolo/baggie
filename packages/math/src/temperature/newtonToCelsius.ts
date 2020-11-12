/**
 * Convert Newton to Celsius.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { newtonToCelsius } from "@baggie/math";
 *
 * const celsius = newtonToCelsius(33);
 * // celsius = 100
 * ```
 *
 * @category Temperature
 */
export const newtonToCelsius = (newton: number): number => newton * (100 / 33);
