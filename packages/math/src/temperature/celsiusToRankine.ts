import { celsiusToFahrenheit } from "./celsiusToFahrenheit";

/**
 * Convert Celsius to Rankine.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { celsiusToRankine } from "@baggie/math";
 * const rankine = celsiusToRankine(10);
 * // rankine = 509.67
 * ```
 *
 * @category Temperature
 */
export const celsiusToRankine = (celsius: number): number =>
    celsiusToFahrenheit(celsius) + 459.67;
