/**
 * Convert Celsius to Fahrenheit.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { celsiusToFahrenheit } from "@baggie/math";
 * const fahrenheit = celsiusToFahrenheit(100);
 * // fahrenheit = 212
 * ```
 *
 * @category Temperature
 */
export const celsiusToFahrenheit = (celsius: number): number =>
    (celsius * 9) / 5 + 32;
