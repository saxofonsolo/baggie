/**
 * Convert Reaumur to Celsius.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { reaumurToCelsius } from "@baggie/math";
 *
 * const celsius = reaumurToCelsius(80);
 * // celsius = 100
 * ```
 *
 * @category Temperature
 */
export const reaumurToCelsius = (reaumur: number): number => reaumur * (5 / 4);
