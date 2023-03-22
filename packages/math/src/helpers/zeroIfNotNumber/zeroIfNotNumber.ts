export const zeroIfNotNumber = (value: any): number =>
    typeof value === "number"
        ? value
        : typeof value === "string"
        ? parseFloat(value) || 0
        : 0;
