import { fahrenheitToCelsius } from "./fahrenheitToCelsius";

/**
 * Convert Rankine to Celsius.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { rankineToCelsius } from "@baggie/math";
 * const celsius = rankineToCelsius(509.67);
 * // celsius = 10
 * ```
 *
 * @category Temperature
 */
export const rankineToCelsius = (rankine: number): number =>
    fahrenheitToCelsius(rankine - 459.67);
