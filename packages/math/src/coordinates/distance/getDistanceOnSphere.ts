import { CoordinatesLatLng } from "../_interfaces/coordinatesLatLng.interface";
import { degreesToRadians } from "../..";

/**
 * Get distance between two sets of coordinates on a sphere using the Haversine Distance Formula.
 *
 * This function takes coordinates given in latitudes and longitudes as both arrays and objects.
 *
 * @category Distance
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
