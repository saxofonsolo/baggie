/**
 * Replace new lines with break elements.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { replaceNewLineWithBreak } from "@baggie/string";
 *
 * const original = `hello
 *     friend`;
 *
 * const parsed = replaceNewLineWithBreak(original);
 * // parsed1 = "hello<br />friend";
 *
 * const keepWhitespace = replaceNewLineWithBreak(original, true);
 * // keepWhitespace = "hello<br />    friend";
 * ```
 *
 * @category Replace
 */
export const replaceNewLineWithBreak = (
    text: string,
    keepWhitespace = false
): string => {
    const whitespace = keepWhitespace ? "" : "[^\\S\\r\\n]*";
    return text.replace(
        new RegExp(`${whitespace}(\\r\\n|\\r|\\n)${whitespace}`, "g"),
        "<br />"
    );
};
