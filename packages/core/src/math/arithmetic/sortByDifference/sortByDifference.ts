/**
 * Sort an array of numbers by their distance to a target number.
 */
export function sortByDifference<T>(
    target: number | T,
    array: T[],
    getDifference?: T extends number ? undefined : (item: T) => number,
): T[] {
    const getSortingValue =
        typeof getDifference === "function"
            ? getDifference
            : (input: T) => input as unknown as number;

    const realTarget =
        typeof target === "number" ? target : getSortingValue(target);

    return [...array].sort(
        (a: T, b: T) =>
            Math.abs(realTarget - getSortingValue(a)) -
            Math.abs(realTarget - getSortingValue(b)),
    );
}
