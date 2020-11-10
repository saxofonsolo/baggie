import { percentage } from "../..";
import { degreesToRadians } from "../..";

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

export const getPointsOnCircle = ({
    radius,
    numberOfPoints,
    offset = 0,
}: GetPointsOnCircleProperties): GetPointsOnCircleReturn[] => {
    const result = [];

    const degreesToFirstPoint =
        percentage({ part: 1, whole: numberOfPoints }) * 3.6;

    for (let i = 1; i <= numberOfPoints; i += 1) {
        let degrees =
            percentage({ part: i, whole: numberOfPoints }) * 3.6 -
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
