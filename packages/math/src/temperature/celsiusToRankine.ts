import { celsiusToFahrenheit } from "./celsiusToFahrenheit";

/**
 * Convert Celsius to Rankine.
 *
 * @category Temperature
 */
export const celsiusToRankine = (celsius: number): number =>
    celsiusToFahrenheit(celsius) + 459.67;
