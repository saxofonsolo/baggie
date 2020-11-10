import { getCircleSurface } from "../..";

export const getCylinderSurface = (
    radius: number,
    height: number,
    includeEnds = true
): number =>
    Math.PI * (radius * 2) * height +
    (includeEnds ? 2 * getCircleSurface(radius) : 0);
