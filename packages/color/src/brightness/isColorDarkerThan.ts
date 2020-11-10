import { getBrightness } from "./getBrightness";

export const isColorDarkerThan = (colorA: string, colorB: string): boolean =>
    getBrightness(colorA) < getBrightness(colorB);
