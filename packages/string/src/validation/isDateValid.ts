import { convertToDate } from "../convert/convertToDate";

interface DateObject {
    day?: number | string;
    month?: number | string;
    year?: number | string;
}

interface Options {
    zeroBasedMonth?: boolean;
    monthBeforeDay?: boolean;
}

/**
 * Check if a date is valid. Returns true or false.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { isDateValid } from "@baggie/string";
 *
 * const stringDate = isDateValid("31-01-2020");
 * // stringDate = true
 *
 * const objectDate = isDateValid({
 *     day: 31,
 *     month: 1,
 *     year: 2020
 * });
 * // objectDate = true
 *
 * const invalidDate = isDateValid("99-01-2020");
 * // invalidDate = false
 *
 * const monthBeforeDay = isDateValid("01/31/2020", { monthBeforeDay: true });
 * // invalidDate = true
 *
 * const zeroBasedMonth = isDateValid("31/00/2020", { zeroBasedMonth: true });
 * // zeroBasedMonth = true
 * ```
 *
 * @category Validation
 */
export const isDateValid = (
    date: string | DateObject,
    options?: Options
): boolean => !!convertToDate(date, options);
