/**
 * Convert Roemer to Celsius.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { roemerToCelsius } from "@baggie/math";
 *
 * const celsius = roemerToCelsius(60);
 * // celsius = 100
 * ```
 */
export const roemerToCelsius = (roemer: number): number =>
    (roemer - 7.5) * (40 / 21);
