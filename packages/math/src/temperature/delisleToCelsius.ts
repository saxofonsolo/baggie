/**
 * Convert Delisle to Celsius.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { delisleToCelsius } from "@baggie/math";
 *
 * const celsius = delisleToCelsius(0);
 * // celsius = 100
 * ```
 *
 * @category Temperature
 */
export const delisleToCelsius = (delisle: number): number =>
    100 - delisle * (2 / 3);
