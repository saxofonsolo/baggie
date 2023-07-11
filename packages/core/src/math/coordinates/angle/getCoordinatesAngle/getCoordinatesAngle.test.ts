import { getCoordinatesAngle } from "./getCoordinatesAngle";

describe("getCoordinatesAngle", () => {
    test("Get angle from one set of coordinates to another", () => {
        expect(getCoordinatesAngle({ x: 0, y: 10 }, { x: 10, y: 0 })).toBe(225);
        expect(getCoordinatesAngle({ x: 0, y: 10 }, { x: 0, y: 0 })).toBe(270);
    });

    test("Get angle from one set of coordinates to another (clockwise)", () => {
        expect(
            getCoordinatesAngle(
                { x: 0, y: 10 },
                { x: 10, y: 0 },
                { clockwise: true },
            ),
        ).toBe(135);
        expect(
            getCoordinatesAngle(
                { x: 0, y: 10 },
                { x: 0, y: 0 },
                { clockwise: true },
            ),
        ).toBe(90);
    });

    test("Get angle from one set of coordinates to another (with an offset)", () => {
        expect(
            getCoordinatesAngle(
                { x: 0, y: 10 },
                { x: 10, y: 0 },
                { offset: 100 },
            ),
        ).toBe(325);
        expect(
            getCoordinatesAngle(
                { x: 0, y: 10 },
                { x: 0, y: 0 },
                { offset: -90 },
            ),
        ).toBe(180);
        expect(
            getCoordinatesAngle(
                { x: 0, y: 10 },
                { x: 10, y: 0 },
                { clockwise: true, offset: 100 },
            ),
        ).toBe(235);
        expect(
            getCoordinatesAngle(
                { x: 0, y: 10 },
                { x: 0, y: 0 },
                { clockwise: true, offset: -90 },
            ),
        ).toBe(0);
    });
});
