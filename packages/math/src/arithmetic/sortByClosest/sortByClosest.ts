/**
 * Sort an array of numbers by their distance to a target number.
 */
export const sortByClosest = <T>(
    target: number | T,
    array: T[],
    ...rest: T extends number ? [rest?: undefined] : [rest: (item: T) => number]
): T[] => {
    const [getNumber] = rest;

    const getSortingValue =
        typeof getNumber === "function"
            ? getNumber
            : (input: T) => input as unknown as number;

    const realTarget =
        typeof target === "number" ? target : getSortingValue(target);

    return [...array].sort(
        (a: T, b: T) =>
            Math.abs(realTarget - getSortingValue(a)) -
            Math.abs(realTarget - getSortingValue(b)),
    );
};
