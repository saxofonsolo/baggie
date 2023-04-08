/* Interfaces */
export type { CIELAB } from "./_interfaces/cielab.interface";
export type { HSLA } from "./_interfaces/hsla.interface";
export type { RGBA } from "./_interfaces/rgba.interface";

/* Brightness */
export { getBrightness } from "./brightness/getBrightness/getBrightness";
export { getDarkness } from "./brightness/getDarkness/getDarkness";
export { isColorBrighterThan } from "./brightness/isColorBrighterThan/isColorBrighterThan";
export { isColorDarkerThan } from "./brightness/isColorDarkerThan/isColorDarkerThan";

/* Check */
export { isHexColor } from "./check/isHexColor/isHexColor";

/* Color schemes */
export { getAnalogousColorScheme } from "./colorSchemes/getAnalogousColorScheme/getAnalogousColorScheme";
export { getComplementaryColorScheme } from "./colorSchemes/getComplementaryColorScheme/getComplementaryColorScheme";
export { getSplitComplementaryColorScheme } from "./colorSchemes/getSplitComplementaryColorScheme/getSplitComplementaryColorScheme";
export { getTetradicColorScheme } from "./colorSchemes/getTetradicColorScheme/getTetradicColorScheme";
export { getTriadicColorScheme } from "./colorSchemes/getTriadicColorScheme/getTriadicColorScheme";

/* Comparison */
export { ColorComparison } from "./comparison/colorComparison";

/* Convert */
export { convertColorNameToHex } from "./convert/convertColorNameToHex";
export { convertHexToRgb } from "./convert/convertHexToRgb/convertHexToRgb";
export { convertHslToRgb } from "./convert/convertHslToRgb";
export { convertRgbToHex } from "./convert/convertRgbToHex/convertRgbToHex";
export { convertRgbToHsl } from "./convert/convertRgbToHsl/convertRgbToHsl";
export { convertRgbToLab } from "./convert/convertRgbToLab/convertRgbToLab";
export { normalizeHexColor } from "./convert/normalizeHexColor";
export { parseColor } from "./convert/parseColor";

/* Manipulate */
export { mixColors } from "./manipulate/mixColors/mixColors";
export { multiplyColors } from "./manipulate/multiplyColors/multiplyColors";
export { screenColors } from "./manipulate/screenColors/screenColors";
