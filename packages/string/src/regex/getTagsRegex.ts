/**
 * Returns a regular expression for matching all HTML and XML tags in a string.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getTagsRegex } from "@baggie/string";
 *
 * const markup = "<p><b>Bold move.</b><br/>Paragraph.</p><!-- comment --> :)";
 * const stripped = markup.replace(getTagsRegex(), "");
 * // stripped = "Bold move.Paragraph. :)"
 * ```
 */
export const getTagsRegex = (groupSequentialTags = false): RegExp =>
    new RegExp(`(<\\/?[a-z!?][^>]*>)${groupSequentialTags ? "+" : ""}`, "ig");
