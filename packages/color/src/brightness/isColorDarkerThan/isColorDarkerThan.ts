import { RGBA } from "../../_interfaces/rgba.interface";
import { getBrightness } from "../getBrightness";

/**
 * Compare the darkness of two colors.
 */
export const isColorDarkerThan = (
    colorA: string | RGBA,
    colorB: string | RGBA,
): boolean => getBrightness(colorA) < getBrightness(colorB);
