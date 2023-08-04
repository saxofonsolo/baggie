/**
 * Return fallback if input is not and can't be converted into a number.
 */
export const nonNumberFallback = (value: any, fallback: number): number =>
    typeof value === "number"
        ? value
        : typeof value === "string"
        ? parseFloat(value) || fallback
        : fallback;
