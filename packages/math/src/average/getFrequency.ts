/**
 * Get the frequency of each item in an array of numbers or strings.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getFrequency } from "@baggie/math";
 *
 * const numbers = [4, 8, 8, 8, 15, 16, 23, 42, 42, 42];
 * const frequencies = getFrequency(numbers);
 *
 * frequencies = [
 *     { value: 4, frequency: 1 },
 *     { value: 15, frequency: 1 },
 *     { value: 16, frequency: 1 },
 *     { value: 23, frequency: 1 },
 *     { value: 8, frequency: 3 },
 *     { value: 42, frequency: 3 },
 * ];
 * ```
 *
 * @category Average
 */
export const getFrequency = <T>(
    values: T[],
): { value: T; frequency: number }[] => {
    const map = new Map<T, number>();
    values.forEach((value) =>
        map.set(value, map.has(value) ? (map.get(value) || 0) + 1 : 1),
    );
    return Array.from(map, ([value, frequency]) => ({
        value,
        frequency,
    })).sort((a, b) =>
        a.frequency < b.frequency ? -1 : a.frequency > b.frequency ? 1 : 0,
    );
};
