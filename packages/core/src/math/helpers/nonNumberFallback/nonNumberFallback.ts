/**
 * Return fallback if input is not and can't be converted into a number.
 */
export const nonNumberFallback = (value: any, fallback: number): number => {
    if (typeof value === "number") return value;
    if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!isNaN(parsed)) return parsed;
    }
    return fallback;
};
