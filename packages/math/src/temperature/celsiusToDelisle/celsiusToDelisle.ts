/**
 * Convert Celsius to Delisle.
 */
export const celsiusToDelisle = (celsius: number): number =>
    ((100 - celsius) * 3) / 2;
