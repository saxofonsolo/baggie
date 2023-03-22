/**
 * Convert the first letter in a string to uppercase.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { capitalizeFirstLetter } from "@baggie/string";
 *
 * const string = "this IS a text";
 *
 * const capitalized = capitalizeFirstLetter(string);
 * // capitalized = "This IS a string"
 *
 * const lowerCaseEverythingElse = capitalizeFirstLetter(string, {
 *     lowerCaseEverythingElse: true,
 * });
 * // lowerCaseEverythingElse = "This is a string"
 * ```
 *
 * @category Convert
 */
export const capitalizeFirstLetter = (
    [first, ...rest]: string,
    options?: { lowerCaseEverythingElse?: boolean; locale?: string },
): string =>
    [
        first.toLocaleUpperCase(options?.locale || navigator.language),
        ...(options?.lowerCaseEverythingElse
            ? [...rest]
                  .join("")
                  .toLocaleLowerCase(options?.locale || navigator.language)
            : rest),
    ].join("");
