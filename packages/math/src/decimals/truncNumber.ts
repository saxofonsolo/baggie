/**
 * Remove decimals from a number and get the integer.
 *
 * @remarks
 * Unless you are supporting Internet Explorer, you should use the native `Math.trunc`
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { truncNumber } from "@baggie/math";
 *
 * const down = truncNumber(13.37);
 * // down = 13
 *
 * const up = truncNumber(-1.123);
 * // up = -1
 * ```
 *
 * @category Decimals
 */
export const truncNumber = (number: number): number =>
    typeof Math.trunc === "undefined"
        ? number < 0
            ? Math.ceil(number)
            : Math.floor(number)
        : Math.trunc(number);
