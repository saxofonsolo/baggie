import { getMean } from "../getMean/getMean";

/**
 * Get the median from an array of numbers.
 */
export function getMedian(numbers: number[]): number {
    const numbersCount = numbers.length;
    const halfOfNumbersCount = Math.floor(numbersCount / 2);

    // Put the array of numbers in ascending order (small to large)
    const sortedNumbers = [...numbers].sort((a: number, b: number) => a - b);

    return numbersCount
        ? !(numbersCount % 2)
            ? // If the amount of numbers is even, the median is the mean of the two middle numbers
              getMean([
                  sortedNumbers[halfOfNumbersCount - 1],
                  sortedNumbers[halfOfNumbersCount],
              ])
            : // If the amount of numbers is odd, the median is the middle number
              sortedNumbers[halfOfNumbersCount]
        : 0;
}
