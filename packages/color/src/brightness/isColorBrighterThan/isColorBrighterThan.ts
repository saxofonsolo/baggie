import { RGBA } from "../../_interfaces/rgba.interface";
import { getBrightness } from "../getBrightness/getBrightness";

/**
 * Compare the brightness of two colors.
 */
export const isColorBrighterThan = (
    colorA: string | RGBA,
    colorB: string | RGBA,
): boolean => getBrightness(colorA) > getBrightness(colorB);
