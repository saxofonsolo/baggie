/**
 * Convert Fahrenheit to Celsius.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { fahrenheitToCelsius } from "@baggie/math";
 *
 * const celsius = fahrenheitToCelsius(212);
 * // celsius = 100
 * ```
 *
 * @category Temperature
 */
export const fahrenheitToCelsius = (fahrenheit: number): number =>
    (fahrenheit - 32) * (5 / 9);
