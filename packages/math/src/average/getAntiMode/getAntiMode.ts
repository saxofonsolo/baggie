/**
 * Get the anti mode from an array of numbers.
 * The anti mode is the least frequent value in a data set.
 */
export const getAntiMode = (
    numbers: number[],
): { numbers: number[]; frequency: number } | undefined => {
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
        .reduce<{ numbers: number[]; frequency: number }>(
            (obj, cur) => ({
                numbers: [...obj.numbers, cur.value],
                frequency: cur.frequency,
            }),
            {
                numbers: [],
                frequency: 0,
            },
        );
};
