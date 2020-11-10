import { getCylinderVolume } from "../..";

export const getConeVolume = (radius: number, height: number): number =>
    getCylinderVolume(radius, height) / 3;
