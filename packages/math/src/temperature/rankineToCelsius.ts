import { fahrenheitToCelsius } from "./fahrenheitToCelsius";

/**
 * Convert Rankine to Celsius.
 *
 * @category Temperature
 */
export const rankineToCelsius = (rankine: number): number =>
    fahrenheitToCelsius(rankine - 459.67);
