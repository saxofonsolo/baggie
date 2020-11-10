import { getCircleSurface } from "../..";

export const getConeSurface = (
    radius: number,
    height: number,
    includeBottom = true
): number =>
    Math.PI * radius * height + (includeBottom ? getCircleSurface(radius) : 0);
