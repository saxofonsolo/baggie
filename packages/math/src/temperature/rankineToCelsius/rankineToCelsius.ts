import { fahrenheitToCelsius } from "../fahrenheitToCelsius/fahrenheitToCelsius";

/**
 * Convert Rankine to Celsius.
 */
export const rankineToCelsius = (rankine: number): number =>
    fahrenheitToCelsius(rankine - 459.67);
