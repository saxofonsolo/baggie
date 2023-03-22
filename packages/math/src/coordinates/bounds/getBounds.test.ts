import { getBounds } from "./getBounds";

describe("getBounds", () => {
    test("Get bounds", () => {
        expect(
            getBounds([
                { x: 10, y: 5 },
                { x: 0, y: 10 },
                { x: -10, y: -10 },
            ]),
        ).toEqual(
            expect.objectContaining({
                min: { x: -10, y: -10 },
                max: { x: 10, y: 10 },
            }),
        );
    });
});
