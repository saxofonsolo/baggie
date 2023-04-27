/**
 * Get the range from an array of numbers.
 */
export const getRange = (numbers: number[]): number => {
    // Put the array of numbers in ascending order (small to large)
    const sortedNumbers = [...numbers].sort((a: number, b: number) => a - b);

    return sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0] || 0;
};
