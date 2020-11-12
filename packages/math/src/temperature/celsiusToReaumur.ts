/**
 * Convert Celsius to Reaumur.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { celsiusToReaumur } from "@baggie/math";
 *
 * const reaumur = celsiusToReaumur(100);
 * // reaumur = 80
 * ```
 *
 * @category Temperature
 */
export const celsiusToReaumur = (celsius: number): number => (celsius * 4) / 5;
