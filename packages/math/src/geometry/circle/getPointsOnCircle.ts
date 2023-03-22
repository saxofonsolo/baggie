import { degreesToRadians } from "../../radians/degreesToRadians";
import { getPercentage } from "../../percentage/getPercentage/getPercentage";

interface GetPointsOnCircleProperties {
    radius: number;
    numberOfPoints: number;
    offset?: number;
}

interface GetPointsOnCircleReturn {
    degrees: number;
    x: number;
    y: number;
}

/**
 * Get an array of equally distanced points on the perimeter of a circle.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getPointsOnCircle } from "@baggie/math";
 *
 * const points = getPointsOnCircle({ radius: 100, numberOfPoints: 3 });
 * /*
 * points = [
 *     {
 *         degrees: 0,
 *         x: 6.123233995736766e-15,
 *         y: -100,
 *     },
 *     {
 *         degrees: 119.99999999999999,
 *         x: 86.60254037844388,
 *         y: 49.99999999999998,
 *     },
 *     {
 *         degrees: 240,
 *         x: -86.60254037844388,
 *         y: 49.99999999999999,
 *     },
 * ]
 * ```
 *
 * @category Geometry - Circle
 */
export const getPointsOnCircle = ({
    radius,
    numberOfPoints,
    offset = 0,
}: GetPointsOnCircleProperties): GetPointsOnCircleReturn[] => {
    const result = [];

    const degreesToFirstPoint =
        getPercentage({ part: 1, whole: numberOfPoints }) * 360;

    for (let i = 1; i <= numberOfPoints; i += 1) {
        let degrees =
            getPercentage({ part: i, whole: numberOfPoints }) * 360 -
            degreesToFirstPoint +
            (offset % 360);
        const radians = degreesToRadians(degrees - 90);

        degrees = degrees < 0 ? 360 + degrees : degrees;

        result.push({
            degrees,
            x: radius * Math.cos(radians),
            y: radius * Math.sin(radians),
        });
    }

    return result;
};
