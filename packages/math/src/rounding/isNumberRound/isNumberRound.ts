/**
 * Check if a number is rounded to the maximum desired amount of decimal places.
 */
export const isNumberRound = (
    number: number,
    maxDecimalPlaces = 0,
): boolean => {
    const p = Math.pow(10, maxDecimalPlaces);
    return Math.round(number * p) / p === number;
};
