import { NonEmptyArray } from "@baggie/typescript";

export const addNumbers = (numbers: NonEmptyArray<number>): number =>
    numbers.reduce((a, b) => a + b, 0);
