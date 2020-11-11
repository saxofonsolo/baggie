import { CoordinatesLatLng } from "../_interfaces/coordinatesLatLng.interface";
import { getDistanceOnSphere } from "./getDistanceOnSphere";

/**
 * Get distance between two sets of coordinates on Earth in kilometers using the Haversine Distance Formula.
 *
 * This function takes coordinates given in latitudes and longitudes as both arrays and objects (compatible with Google Maps).
 *
 * @category Distance
 */
export const getDistanceOnEarth = (
    from: CoordinatesLatLng,
    to: CoordinatesLatLng
): number => getDistanceOnSphere(from, to, 12742);
