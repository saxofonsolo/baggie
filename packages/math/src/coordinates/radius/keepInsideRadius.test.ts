import { keepInsideRadius } from "./keepInsideRadius";

describe("keepInsideRadius", () => {
    test("Already inside radius", () => {
        expect(keepInsideRadius({ x: 20, y: 0 }, 100)).toEqual(
            expect.objectContaining({ x: 20, y: 0 })
        );
    });

    test("Currently outside radius", () => {
        expect(keepInsideRadius({ x: 20, y: 0 }, 10)).toEqual(
            expect.objectContaining({ x: 10, y: 0 })
        );
    });
});
