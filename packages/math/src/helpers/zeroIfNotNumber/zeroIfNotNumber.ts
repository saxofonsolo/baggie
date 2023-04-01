/**
 * Return 0 if input is not and can't be converted into a number.
 */
export const zeroIfNotNumber = (value: any): number =>
    typeof value === "number"
        ? value
        : typeof value === "string"
        ? parseFloat(value) || 0
        : 0;
