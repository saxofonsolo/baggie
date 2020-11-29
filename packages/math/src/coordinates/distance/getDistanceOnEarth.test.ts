import { getDistanceOnEarth } from "./getDistanceOnEarth";

describe("getDistanceOnEarth", () => {
    test("Get distance on Earth", () => {
        expect(
            getDistanceOnEarth(
                { lat: 56.15674, lng: 10.21076 },
                { lat: 57.048, lng: 9.9187 }
            )
        ).toBe(100.70265108699398);
    });
});
