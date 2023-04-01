/**
 * Get the frequency of each item in an array of numbers or strings.
 */
export const getFrequency = <T, R extends boolean = false>(
    values: T[],
    returnMap?: R,
): R extends true ? Map<T, number> : { value: T; frequency: number }[] => {
    const map = new Map<T, number>();
    values.forEach((value) =>
        map.set(value, map.has(value) ? (map.get(value) || 0) + 1 : 1),
    );
    return (
        returnMap
            ? map
            : Array.from(map, ([value, frequency]) => ({
                  value,
                  frequency,
              })).sort((a, b) =>
                  a.frequency < b.frequency
                      ? -1
                      : a.frequency > b.frequency
                      ? 1
                      : 0,
              )
    ) as R extends true ? Map<T, number> : { value: T; frequency: number }[];
};
