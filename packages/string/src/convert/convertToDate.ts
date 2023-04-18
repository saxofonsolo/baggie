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
 * Convert a string (or an object) to a date.
 *
 * Returns `false` if given an invalid date.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { convertToDate } from "@baggie/string";
 *
 * const stringDate = convertToDate("31-01-2020");
 * // stringDate = Fri Jan 31 2020 00:00:00 GMT+0100 (Central European Standard Time)
 *
 * const objectDate = convertToDate({
 *     day: 31,
 *     month: 1,
 *     year: 2020
 * });
 * // objectDate = Fri Jan 31 2020 00:00:00 GMT+0100 (Central European Standard Time)
 *
 * const invalidDate = convertToDate("99-01-2020");
 * // invalidDate = false
 *
 * const monthBeforeDay = convertToDate("01/31/2020", { monthBeforeDay: true });
 * // invalidDate = Fri Jan 31 2020 00:00:00 GMT+0100 (Central European Standard Time)
 *
 * const zeroBasedMonth = convertToDate("31/00/2020", { zeroBasedMonth: true });
 * // zeroBasedMonth = Fri Jan 31 2020 00:00:00 GMT+0100 (Central European Standard Time)
 * ```
 */
export const convertToDate = (
    date: string | DateObject,
    options?: Options,
): Date | false => {
    const { zeroBasedMonth = false, monthBeforeDay = false } = { ...options };
    const dateObject: DateObject = {};
    let dateArray: string[] = [];

    if (typeof date === "string") {
        dateArray = date.replace(/^[^0-9]+|[^0-9]+$/g, "").split(/[^0-9]+/);

        if (
            dateArray.length === 1 &&
            (dateArray[0].length === 6 || dateArray[0].length === 8)
        ) {
            dateArray = [
                dateArray[0].substring(0, 2),
                dateArray[0].substring(2, 4),
                dateArray[0].substring(4),
            ];
        } else if (dateArray.length !== 3) {
            return false;
        }
    }

    dateObject.day = Number(
        (dateArray.length
            ? monthBeforeDay
                ? dateArray[1]
                : dateArray[0]
            : 0) || (date as DateObject).day,
    );
    dateObject.month = Number(
        (dateArray.length
            ? monthBeforeDay
                ? dateArray[0]
                : dateArray[1]
            : 0) || (date as DateObject).month,
    );
    dateObject.year = Number(dateArray[2] || (date as DateObject).year);

    const trueMonth = dateObject.month - (zeroBasedMonth ? 0 : 1);
    const validDate = new Date(
        `${String(dateObject.year).padStart(4, "0")}-${String(
            trueMonth + 1,
        ).padStart(2, "0")}-${String(dateObject.day).padStart(
            2,
            "0",
        )}T00:00:00+00:00`,
    );

    if (
        validDate.getDate() === dateObject.day &&
        validDate.getMonth() === trueMonth &&
        String(validDate.getFullYear()).endsWith(String(dateObject.year))
    ) {
        return validDate;
    } else {
        return false;
    }
};
