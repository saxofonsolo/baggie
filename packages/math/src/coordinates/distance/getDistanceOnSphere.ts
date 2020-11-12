import { CoordinatesLatLng } from "../_interfaces/coordinatesLatLng.interface";
import { degreesToRadians } from "../..";

/**
 * Get distance between two sets of coordinates on a sphere using the Haversine
 * Distance Formula.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getDistanceOnSphere } from "@baggie/math";
 *
 * const from = { lat: 56.15674, lng: 10.21076 };
 * const to = { lat: 57.048, lng: 9.9187 };
 *
 * const distance = getDistanceOnSphere(from, to, 12742);
 * // distance = 100.70265108699398
 * ```
 *
 * @category Coordinate - Distance
 */
export const getDistanceOnSphere = (
    from: CoordinatesLatLng,
    to: CoordinatesLatLng,
    diameter: number
): number => {
    const dLat = degreesToRadians(to.lat - from.lat);
    const dLon = degreesToRadians(to.lng - from.lng);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degreesToRadians(from.lat)) *
            Math.cos(degreesToRadians(to.lat)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);

    return diameter * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};
