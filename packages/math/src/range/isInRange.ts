import { NonEmptyArray } from "@baggie/typescript";

export const isInRange = (
    number: number,
    ...ranges: NonEmptyArray<[number, number]>
): boolean =>
    ranges.reduce<boolean>(
        (inRange: boolean, range: number[]) =>
            inRange || (number >= range[0] && number <= range[1]),
        false
    );
