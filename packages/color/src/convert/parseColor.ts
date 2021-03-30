import { getPercentage } from "@baggie/math";
import { NonEmptyArray } from "@baggie/typescript";
import { HSLA } from "../_interfaces/hsla.interface";
import { RGBA } from "../_interfaces/rgba.interface";
import { convertHexToRgb } from "./convertHexToRgb";
import { convertHslToRgb } from "./convertHslToRgb";
import { convertColorNameToHex } from "./convertColorNameToHex";

/**
 * Parse a string (like `#fff`, `#f0dd6a`, `violet`, `rgb(255, 100, 50)` or `rgba(255,255,255,.5)`) to an object
 * containing red, green, blue and alpha.
 *
 * @category Convert
 */
export const parseColor = (
    input: string | NonEmptyArray<number> | HSLA | RGBA
): RGBA => {
    let returnObject: RGBA = {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1,
    };

    if (Array.isArray(input)) {
        returnObject.red = input[0] || 0;
        returnObject.green = input[1] || 0;
        returnObject.blue = input[2] || 0;
        returnObject.alpha = isNaN(input[3]) ? 1 : input[3];
    } else if (typeof input === "object") {
        if ("lightness" in input) {
            returnObject = convertHslToRgb(input);
        } else {
            returnObject.red = input.red || 0;
            returnObject.green = input.green || 0;
            returnObject.blue = input.blue || 0;
            returnObject.alpha = input.alpha || 1;
        }
    } else {
        let stringInput = input.toLowerCase();
        stringInput = convertColorNameToHex(stringInput) || stringInput;

        const rgba = convertHexToRgb(stringInput);
        if (rgba) {
            returnObject = rgba;
        } else {
            const rgbMatch = stringInput.match(
                /^rgb[a]?\(\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?)\s*(?:,\s*(0?\.\d+|0|1?))?\s*\)/i
            );
            if (rgbMatch && rgbMatch.length) {
                returnObject.red = rgbMatch[1].endsWith("%")
                    ? getPercentage({
                          percentage: parseFloat(rgbMatch[1]),
                          whole: 255,
                      })
                    : parseInt(rgbMatch[1], 10);
                returnObject.green = rgbMatch[2].endsWith("%")
                    ? getPercentage({
                          percentage: parseFloat(rgbMatch[2]),
                          whole: 255,
                      })
                    : parseInt(rgbMatch[2], 10);
                returnObject.blue = rgbMatch[3].endsWith("%")
                    ? getPercentage({
                          percentage: parseFloat(rgbMatch[3]),
                          whole: 255,
                      })
                    : parseInt(rgbMatch[3], 10);
                returnObject.alpha = rgbMatch[4] ? parseFloat(rgbMatch[4]) : 1;
            }
        }
    }

    return returnObject;
};
