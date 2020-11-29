import { getAllDistances } from "./getAllDistances";

describe("getAllDistances", () => {
    test("Find distances from specific position", () => {
        expect(
            getAllDistances(
                { x: 9, y: 30 },
                { x: 10, y: 2 },
                { x: 20, y: 20 },
                { x: -20, y: 20 }
            )
        ).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    distance: 14.866068747318506,
                    coordinates: expect.objectContaining({
                        from: expect.objectContaining({ x: 9, y: 30 }),
                        to: expect.objectContaining({ x: 20, y: 20 }),
                    }),
                }),
                expect.objectContaining({
                    distance: 28.0178514522438,
                    coordinates: expect.objectContaining({
                        from: expect.objectContaining({ x: 9, y: 30 }),
                        to: expect.objectContaining({ x: 10, y: 2 }),
                    }),
                }),
                expect.objectContaining({
                    distance: 30.675723300355934,
                    coordinates: expect.objectContaining({
                        from: expect.objectContaining({ x: 9, y: 30 }),
                        to: expect.objectContaining({ x: -20, y: 20 }),
                    }),
                }),
            ])
        );
    });

    test("Find distances between a bunch of position", () => {
        expect(
            getAllDistances(
                null,
                { x: -10, y: -10, name: "a" },
                { x: 1, y: 1, name: "b" },
                { x: 2, y: 2, name: "c" },
                { x: 30, y: 50, name: "d" }
            )
        ).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    distance: 1.4142135623730951,
                    coordinates: expect.objectContaining({
                        from: expect.objectContaining({
                            x: 1,
                            y: 1,
                            name: "b",
                        }),
                        to: expect.objectContaining({ x: 2, y: 2, name: "c" }),
                    }),
                }),
                expect.objectContaining({
                    distance: 15.556349186104045,
                    coordinates: expect.objectContaining({
                        from: expect.objectContaining({
                            x: -10,
                            y: -10,
                            name: "a",
                        }),
                        to: expect.objectContaining({ x: 1, y: 1, name: "b" }),
                    }),
                }),
                expect.objectContaining({
                    distance: 16.97056274847714,
                    coordinates: expect.objectContaining({
                        from: expect.objectContaining({
                            x: -10,
                            y: -10,
                            name: "a",
                        }),
                        to: expect.objectContaining({ x: 2, y: 2, name: "c" }),
                    }),
                }),
                expect.objectContaining({
                    distance: 55.569775957799216,
                    coordinates: expect.objectContaining({
                        from: expect.objectContaining({
                            x: 2,
                            y: 2,
                            name: "c",
                        }),
                        to: expect.objectContaining({
                            x: 30,
                            y: 50,
                            name: "d",
                        }),
                    }),
                }),
                expect.objectContaining({
                    distance: 56.938563381947034,
                    coordinates: expect.objectContaining({
                        from: expect.objectContaining({
                            x: 1,
                            y: 1,
                            name: "b",
                        }),
                        to: expect.objectContaining({
                            x: 30,
                            y: 50,
                            name: "d",
                        }),
                    }),
                }),
                expect.objectContaining({
                    distance: 72.11102550927978,
                    coordinates: expect.objectContaining({
                        from: expect.objectContaining({
                            x: -10,
                            y: -10,
                            name: "a",
                        }),
                        to: expect.objectContaining({
                            x: 30,
                            y: 50,
                            name: "d",
                        }),
                    }),
                }),
            ])
        );
    });
});
