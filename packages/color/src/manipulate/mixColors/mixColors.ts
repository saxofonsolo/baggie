import { RGBA } from "../../_interfaces/rgba.interface";
import { convertHexToRgb } from "../../convert/convertHexToRgb";
import { convertRgbToHex } from "../../convert/convertRgbToHex/convertRgbToHex";

/**
 * Mix two colors together.
 */
export const mixColors = (
    colorA: string | RGBA,
    colorB: string | RGBA,
    weight = 0.5,
): string | undefined => {
    try {
        const rgb1 =
            typeof colorA === "string" ? convertHexToRgb(colorA) : colorA;
        const rgb2 =
            typeof colorB === "string" ? convertHexToRgb(colorB) : colorB;
        const red1 = rgb1.red / 255;
        const red2 = rgb2.red / 255;
        const green1 = rgb1.green / 255;
        const green2 = rgb2.green / 255;
        const blue1 = rgb1.blue / 255;
        const blue2 = rgb2.blue / 255;
        const alpha1 = typeof rgb1.alpha === "number" ? rgb1.alpha : 1;
        const alpha2 = typeof rgb2.alpha === "number" ? rgb2.alpha : 1;

        return convertRgbToHex({
            red: Math.round((red2 + (red1 - red2) * weight) * 255),
            green: Math.round((green2 + (green1 - green2) * weight) * 255),
            blue: Math.round((blue2 + (blue1 - blue2) * weight) * 255),
            alpha:
                Math.round((alpha2 + (alpha1 - alpha2) * weight) * 1000) / 1000,
        });
    } catch (err) {
        return undefined;
    }
};
