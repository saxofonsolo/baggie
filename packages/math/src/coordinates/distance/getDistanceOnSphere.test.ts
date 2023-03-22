import { getDistanceOnSphere } from "./getDistanceOnSphere";

describe("getDistanceOnSphere", () => {
    test("Get distance on sphere", () => {
        expect(
            getDistanceOnSphere(
                { lat: 56.15674, lng: 10.21076 },
                { lat: 57.048, lng: 9.9187 },
                12742,
            ),
        ).toBe(100.70265108699398);
    });
});
