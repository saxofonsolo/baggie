import { convertToCoordinates } from "./convertToCoordinates";

describe("convertToCoordinates", () => {
    test("Single number", () => {
        expect(convertToCoordinates(10)).toStrictEqual({ x: 10, y: 10 });
        expect(convertToCoordinates(-91.1)).toStrictEqual({
            x: -91.1,
            y: -91.1,
        });
    });

    test("Array", () => {
        expect(convertToCoordinates([1, 2])).toStrictEqual({ x: 1, y: 2 });
    });

    test("Object", () => {
        expect(convertToCoordinates({ x: 1, y: 2 })).toStrictEqual({
            x: 1,
            y: 2,
        });
    });

    test("Nothing", () => {
        expect(convertToCoordinates()).toStrictEqual({ x: 0, y: 0 });
    });

    test("Invalid values", () => {
        // @ts-ignore
        expect(convertToCoordinates({ x: "1", y: 2, m: 123 })).toStrictEqual({
            x: 1,
            y: 2,
        });
        // @ts-ignore
        expect(convertToCoordinates([12, "30"])).toStrictEqual({
            x: 12,
            y: 30,
        });
        // @ts-ignore
        expect(convertToCoordinates([12, "jens"])).toStrictEqual({
            x: 12,
            y: 0,
        });
        // @ts-ignore
        expect(convertToCoordinates("yelp")).toStrictEqual({ x: 0, y: 0 });
    });
});
