import { convertToDate } from "../../convert/convertToDate/convertToDate";

interface DateObject {
    day: number | string;
    month: number | string;
    year: number | string;
}

interface Options {
    zeroBasedMonth?: boolean;
    monthBeforeDay?: boolean;
}

/**
 * Check if a date is valid. Returns true or false.
 */
export function isDateValid(
    date: string | DateObject,
    options?: Options,
): boolean {
    return !!convertToDate(date, options);
}
