/**
 * Convert Celsius to Delisle.
 *
 * @category Temperature
 */
export const celsiusToDelisle = (celsius: number): number =>
    ((100 - celsius) * 3) / 2;
