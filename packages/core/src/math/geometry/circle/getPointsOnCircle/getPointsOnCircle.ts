import { degreesToRadians } from "../../../radians/degreesToRadians";
import { getPercentage } from "../../../percentage/getPercentage/getPercentage";

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
 */
export function getPointsOnCircle({
    radius,
    numberOfPoints,
    offset = 0,
}: GetPointsOnCircleProperties): GetPointsOnCircleReturn[] {
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
}
