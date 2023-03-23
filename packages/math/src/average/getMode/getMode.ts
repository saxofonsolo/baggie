/**
 * Get the mode from an array of numbers.
 * The mode is the most frequent value in a data set.
 */
export const getMode = (
    numbers: number[],
): { numbers: number[]; frequency: number } | undefined => {
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

    return {
        numbers: mode,
        frequency: greatestFrequency,
    };
};
