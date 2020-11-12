/**
 * Convert Celsius to Delisle.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { celsiusToDelisle } from "@baggie/math";
 * const delisle = celsiusToDelisle(100);
 * // delisle = 0
 * ```
 *
 * @category Temperature
 */
export const celsiusToDelisle = (celsius: number): number =>
    ((100 - celsius) * 3) / 2;
