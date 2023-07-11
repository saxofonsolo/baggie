import { celsiusToFahrenheit } from "../celsiusToFahrenheit/celsiusToFahrenheit";

/**
 * Convert Celsius to Rankine.
 */
export const celsiusToRankine = (celsius: number): number =>
    celsiusToFahrenheit(celsius) + 459.67;
