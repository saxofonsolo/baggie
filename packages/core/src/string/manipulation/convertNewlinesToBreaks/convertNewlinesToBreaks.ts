import { getNewlineRegex } from "../../regex/getNewlineRegex/getNewlineRegex";

/**
 * Replace newlines with break elements.
 */
export function convertNewlinesToBreaks(
    string: string,
    keepWhitespace = false,
): string {
    return string.replace(getNewlineRegex(!keepWhitespace), "<br />");
}
