/**
 * Get the surface area of a segment of a circle given the radius
 * of the circle and the height of the segment.
 */
export const getCircleSegmentArea = (
    radius: number,
    segmentHeight: number,
): number =>
    Math.pow(radius, 2) * Math.acos((radius - segmentHeight) / radius) -
    (radius - segmentHeight) *
        Math.sqrt(2 * radius * segmentHeight - Math.pow(segmentHeight, 2));
