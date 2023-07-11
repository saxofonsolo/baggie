/**
 * Convert Celsius to Reaumur.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { celsiusToReaumur } from "@baggie/core";
 *
 * const reaumur = celsiusToReaumur(100);
 * // reaumur = 80
 * ```
 */
export const celsiusToReaumur = (celsius: number): number => (celsius * 4) / 5;
