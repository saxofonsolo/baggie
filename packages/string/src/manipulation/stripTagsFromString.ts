import { getTagsRegex } from "../regex/getTagsRegex";

/**
 * Strip HTML and XML tags from a string. Tags are replaced with a space unless .
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { stripTagsFromString } from "@baggie/string";
 *
 * const markup = "<p><b>Bold move.</b><br/>Paragraph.</p><!-- comment -->:)";
 *
 * const stripped = stripTagsFromString(markup, "");
 * // stripped = "Bold move.Paragraph.:)"
 *
 * const spacedAndNotTrimmed = stripTagsFromString(markup, " ", false);
 * // spacedAndNotTrimmed = " Bold move. Paragraph. :)"
 * ```
 */
export const stripTagsFromString = (
    markup: string,
    replaceWith = " ",
    trim = true,
): string => {
    const newString = markup.replace(getTagsRegex(true), replaceWith);
    return trim ? newString.trim() : newString;
};
