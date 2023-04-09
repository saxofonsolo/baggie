import { getNewLineRegex } from "../regex/getNewLineRegex";

/**
 * Replace new lines with break elements.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { convertNewLinesToBreaks } from "@baggie/string";
 *
 * const original = `hello
 *     friend`;
 *
 * const parsed = convertNewLinesToBreaks(original);
 * // parsed1 = "hello<br />friend";
 *
 * const keepWhitespace = convertNewLinesToBreaks(original, true);
 * // keepWhitespace = "hello<br />    friend";
 * ```
 */
export const convertNewLinesToBreaks = (
    text: string,
    keepWhitespace = false,
): string => text.replace(getNewLineRegex(!keepWhitespace), "<br />");
