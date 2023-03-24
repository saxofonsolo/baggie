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
 * const stripped = stripTagsFromString(markup);
 * // stripped = "Bold move.Paragraph.:)"
 *
 * const spacedAndTrimmed = stripTagsFromString(markup, " ").trim();
 * // spacedAndTrimmed = "Bold move. Paragraph. :)"
 * ```
 *
 * @category Manipulation
 */
export const stripTagsFromString = (markup: string, replaceWith = ""): string =>
    markup.replace(getTagsRegex(true), replaceWith);
