import { getPointBetween } from "./getPointBetween";

describe("getPointBetween", () => {
    test("Get point between", () => {
        expect(
            getPointBetween({ x: 10, y: 10 }, { x: 20, y: 20 }, 0.5)
        ).toEqual(expect.objectContaining({ x: 15, y: 15 }));
    });
});
