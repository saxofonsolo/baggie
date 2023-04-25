import { getNewLineRegex } from "../../regex/getNewLineRegex";

/**
 * Replace new lines with break elements.
 */
export const convertNewLinesToBreaks = (
    string: string,
    keepWhitespace = false,
): string => string.replace(getNewLineRegex(!keepWhitespace), "<br />");
