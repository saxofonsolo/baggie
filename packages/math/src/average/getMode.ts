import { NonEmptyArray } from "@baggie/typescript";

/**
 * Get the mode from an array of numbers.
 * The mode is the most frequent value in a data set
 *
 * There can be more than one mode if multiple values
 * are repeated an equal amount of times.
 *
 * @category Average
 *
 * @example
 * ```ts
 * import { getMode } from "@baggie/math";
 *
 * const numbers = [4, 8, 8, 8, 15, 16, 23, 42, 42, 42];
 * const mode = getMode(numbers);
 * // mode = { mode: [8, 42], frequency: 3 }
 * ```
 */
export const getMode = (
    numbers: NonEmptyArray<number>
): { mode: number[]; frequency: number } | undefined => {
    const numbersMapping: { [key: string]: number } = {};
    let greatestFrequency = 0;
    let mode: number[] = [];

    numbers.forEach((number: number) => {
        numbersMapping[number] = (numbersMapping[number] || 0) + 1;

        if (greatestFrequency < numbersMapping[number]) {
            greatestFrequency = numbersMapping[number];
            mode = [number];
        } else if (greatestFrequency === numbersMapping[number]) {
            mode.push(number);
        }
    });

    return greatestFrequency
        ? {
              mode,
              frequency: greatestFrequency,
          }
        : undefined;
};
