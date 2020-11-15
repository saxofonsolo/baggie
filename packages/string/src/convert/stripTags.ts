import { getTagsRegex } from "..";

/**
 * Strip HTML and XML tags from a string. Tags are replaced with a space unless .
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { stripTags } from "@baggie/string";
 *
 * const markup = "<p><b>Bold move.</b><br/>Paragraph.</p><!-- comment -->:)";
 *
 * const stripped = stripTags(markup);
 * // stripped = "Bold move.Paragraph.:)"
 *
 * const spacedAndTrimmed = stripTags(markup, " ").trim();
 * // spacedAndTrimmed = "Bold move. Paragraph. :)"
 * ```
 *
 * @category Convert
 */
export const stripTags = (markup: string, replaceWith = " "): string =>
    markup.replace(getTagsRegex(true), replaceWith);
