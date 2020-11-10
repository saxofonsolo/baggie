export const getCuboidSurface = (x: number, y: number, z: number): number =>
    (x * y + x * z + y * z) * 2;
