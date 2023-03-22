/**
 * Get the anti mode from an array of numbers.
 * The anti mode is the least frequent value in a data set
 *
 * There can be more than one anti mode if multiple values
 * are repeated an equal amount of times.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getAntiMode } from "@baggie/math";
 *
 * const numbers = [4, 8, 8, 8, 16, 16, 23, 42, 42, 42];
 * const antiMode = getAntiMode(numbers);
 * // antiMode = { antiMode: [4, 23], frequency: 1 }
 * ```
 *
 * @category Average
 */
export const getAntiMode = (
    numbers: number[],
): { antiMode: number[]; frequency: number } | undefined => {
    const numbersMapping = numbers.reduce<
        Record<string, { value: number; frequency: number }>
    >((obj, cur) => {
        if (typeof obj[cur] === "undefined") {
            obj[cur] = {
                value: cur,
                frequency: 1,
            };
        } else {
            obj[cur].frequency += 1;
        }
        return obj;
    }, {});
    return Object.values(numbersMapping)
        .map(({ value, frequency }) => ({ value, frequency }))
        .sort((a, b) =>
            a.frequency < b.frequency ? -1 : a.frequency > b.frequency ? 1 : 0,
        )
        .filter((cur, _index, arr) => cur.frequency === arr[0].frequency)
        .reduce<{ antiMode: number[]; frequency: number }>(
            (obj, cur) => ({
                antiMode: [...obj.antiMode, cur.value],
                frequency: cur.frequency,
            }),
            {
                antiMode: [],
                frequency: 0,
            },
        );
};
