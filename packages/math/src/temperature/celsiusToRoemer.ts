/**
 * Convert Celsius to Roemer.
 *
 * @category Temperature
 */
export const celsiusToRoemer = (celsius: number): number =>
    celsius * (21 / 40) + 7.5;
