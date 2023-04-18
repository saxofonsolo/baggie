import { intersperse } from "./intersperse";

describe("intersperse", () => {
    test("Insert single value", () => {
        expect(intersperse([1, 2], 3)).toStrictEqual([1, 3, 2]);
        expect(intersperse(["a", "c"], "bbb")).toStrictEqual(["a", "bbb", "c"]);
    });

    test("Insert multiple values", () => {
        expect(intersperse([10, 15], 11, 12, 13, 14)).toStrictEqual([
            10, 11, 12, 13, 14, 15,
        ]);
        expect(intersperse([10, 15], ...["11", 12, "13", 14])).toStrictEqual([
            10,
            "11",
            12,
            "13",
            14,
            15,
        ]);
    });

    test("Insert value with function", () => {
        expect(
            intersperse(
                [10, 12],
                ({ previous, next }: { previous: number; next: number }) =>
                    previous + (next - previous) / 2,
            ),
        ).toStrictEqual([10, 11, 12]);
        expect(
            intersperse(
                [1, 2, 3, 4],
                ({ previous, next }: { previous: number; next: number }) =>
                    previous + (next - previous) / 2,
            ),
        ).toStrictEqual([1, 1.5, 2, 2.5, 3, 3.5, 4]);
        expect(
            intersperse(
                [1, 2, 3, 4],
                ...[
                    ({ previous, next }: { previous: number; next: number }) =>
                        previous + (next - previous) / 2,
                    "hello",
                ],
            ),
        ).toStrictEqual([1, 1.5, "hello", 2, 2.5, "hello", 3, 3.5, "hello", 4]);
    });
});
