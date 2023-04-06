/* Interfaces */
export type { CIELAB } from "./_interfaces/cielab.interface";
export type { HSLA } from "./_interfaces/hsla.interface";
export type { RGBA } from "./_interfaces/rgba.interface";

/* Brightness */
export { getBrightness } from "./brightness/getBrightness/getBrightness";
export { getDarkness } from "./brightness/getDarkness";
export { isColorBrighterThan } from "./brightness/isColorBrighterThan/isColorBrighterThan";
export { isColorDarkerThan } from "./brightness/isColorDarkerThan/isColorDarkerThan";

/* Check */
export { isHexColor } from "./check/isHexColor/isHexColor";

/* Combinations */
export { getAnalogousColorScheme } from "./combinations/getAnalogousColorScheme";
export { getComplementaryColorScheme } from "./combinations/getComplementaryColorScheme";
export { getSplitComplementaryColorScheme } from "./combinations/getSplitComplementaryColorScheme";
export { getTetradicColorScheme } from "./combinations/getTetradicColorScheme";
export { getTriadicColorScheme } from "./combinations/getTriadicColorScheme";

/* Comparison */
export { ColorComparison } from "./comparison/colorComparison";

/* Convert */
export { convertColorNameToHex } from "./convert/convertColorNameToHex";
export { convertHexToRgb } from "./convert/convertHexToRgb";
export { convertHslToRgb } from "./convert/convertHslToRgb";
export { convertRgbToHex } from "./convert/convertRgbToHex";
export { convertRgbToHsl } from "./convert/convertRgbToHsl";
export { convertRgbToLab } from "./convert/convertRgbToLab";
export { normalizeHexColor } from "./convert/normalizeHexColor";
export { parseColor } from "./convert/parseColor";

/* Manipulate */
export { mixColors } from "./manipulate/mixColors";
export { multiplyColors } from "./manipulate/multiplyColors";
export { screenColors } from "./manipulate/screenColors";
