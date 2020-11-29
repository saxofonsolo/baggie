import { getPointsOnCircle } from "./getPointsOnCircle";

describe("getPointsOnCircle", () => {
    test("Get points", () => {
        expect(getPointsOnCircle({ radius: 100, numberOfPoints: 3 })).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    degrees: 0,
                    x: 6.123233995736766e-15,
                    y: -100,
                }),
                expect.objectContaining({
                    degrees: 119.99999999999999,
                    x: 86.60254037844388,
                    y: 49.99999999999998,
                }),
                expect.objectContaining({
                    degrees: 240,
                    x: -86.60254037844388,
                    y: 49.99999999999999,
                }),
            ])
        );
    });
});
