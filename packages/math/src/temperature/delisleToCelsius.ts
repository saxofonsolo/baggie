/**
 * Convert Delisle to Celsius.
 *
 * @category Temperature
 */
export const delisleToCelsius = (delisle: number): number =>
    100 - delisle * (2 / 3);
