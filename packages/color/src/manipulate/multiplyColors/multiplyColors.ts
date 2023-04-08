import { getMean } from "@baggie/math";
import { RGBA } from "../../_interfaces/rgba.interface";
import { convertHexToRgb } from "../../convert/convertHexToRgb";
import { convertRgbToHex } from "../../convert/convertRgbToHex/convertRgbToHex";

/**
 * Blend two colors together with the multiply mode.
 */
export const multiplyColors = (
    colorA: string | RGBA,
    colorB: string | RGBA,
) => {
    try {
        const rgb1 =
            typeof colorA === "string" ? convertHexToRgb(colorA) : colorA;
        const rgb2 =
            typeof colorB === "string" ? convertHexToRgb(colorB) : colorB;
        return convertRgbToHex({
            red: Math.round((rgb1.red * rgb2.red) / 255),
            green: Math.round((rgb1.green * rgb2.green) / 255),
            blue: Math.round((rgb1.blue * rgb2.blue) / 255),
            alpha: Math.min(getMean([rgb1.alpha || 1, rgb2.alpha || 1]), 1),
        });
    } catch (err) {
        return undefined;
    }
};
