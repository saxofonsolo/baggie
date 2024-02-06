import { convertRangePosition } from "../../../math";
import { RGBA } from "../../_interfaces/rgba.interface";
import { isHexColor } from "../../check/isHexColor/isHexColor";

const rgbRegExp =
    /rgba?\(\s*([.e0-9]+%?)\s*,\s*([.e0-9]+%?)\s*,\s*([.e0-9]+%?)\s*(?:,\s*([.e0-9]+)\s*)?\)/;
const isRgbColor = (input: string) => rgbRegExp.test(input);

/**
 * Convert a hex color to an object with RGB color values.
 */
export function convertStringToRgb(input: string): RGBA {
    if (isHexColor(input)) {
        const match = input.slice(1);

        if (match.length === 3 || match.length === 4) {
            const rgb = [
                match.charAt(0),
                match.charAt(1),
                match.charAt(2),
                match.charAt(3) || "F",
            ];

            return {
                red: parseInt(rgb[0] + rgb[0], 16),
                green: parseInt(rgb[1] + rgb[1], 16),
                blue: parseInt(rgb[2] + rgb[2], 16),
                alpha: parseInt(rgb[3] + rgb[3], 16) / 255,
            };
        } else {
            const rgb = [
                match.charAt(0) + match.charAt(1),
                match.charAt(2) + match.charAt(3),
                match.charAt(4) + match.charAt(5),
                match.charAt(7) ? match.charAt(6) + match.charAt(7) : "FF",
            ];

            return {
                red: parseInt(rgb[0], 16),
                green: parseInt(rgb[1], 16),
                blue: parseInt(rgb[2], 16),
                alpha: parseInt(rgb[3], 16) / 255,
            };
        }
    } else if (isRgbColor(input)) {
        const [_match, red, green, blue, alpha] = input.match(
            rgbRegExp,
        ) as RegExpMatchArray;
        return {
            red: red.endsWith("%")
                ? Math.round(
                      convertRangePosition(
                          parseInt(red.slice(0, -1)),
                          { from: 0, to: 100 },
                          { from: 0, to: 255 },
                      ),
                  )
                : parseInt(red),
            green: green.endsWith("%")
                ? Math.round(
                      convertRangePosition(
                          parseInt(green.slice(0, -1)),
                          { from: 0, to: 100 },
                          { from: 0, to: 255 },
                      ),
                  )
                : parseInt(green),
            blue: blue.endsWith("%")
                ? Math.round(
                      convertRangePosition(
                          parseInt(blue.slice(0, -1)),
                          { from: 0, to: 100 },
                          { from: 0, to: 255 },
                      ),
                  )
                : parseInt(blue),
            alpha: alpha ? parseFloat(alpha) : 0,
        };
    }

    throw "Not a valid color string";
}
