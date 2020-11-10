import { getTrianglePerimeter } from "../..";

export const getTriangleSurface = (a: number, b: number, c: number): number => {
    const semiperimeter = getTrianglePerimeter(a, b, c) / 2;
    return Math.sqrt(
        semiperimeter *
            (semiperimeter - a) *
            (semiperimeter - b) *
            (semiperimeter - c)
    );
};
