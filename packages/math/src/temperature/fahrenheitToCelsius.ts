/**
 * Convert Fahrenheit to Celsius.
 *
 * @category Temperature
 */
export const fahrenheitToCelsius = (fahrenheit: number): number =>
    (fahrenheit - 32) * (5 / 9);
