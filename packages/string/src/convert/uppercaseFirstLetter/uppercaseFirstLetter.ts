/**
 * Convert the first letter in a string to uppercase.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { uppercaseFirstLetter } from "@baggie/string";
 *
 * const string = "this IS a text";
 *
 * const capitalized = uppercaseFirstLetter(string);
 * // capitalized = "This IS a string"
 *
 * const lowerCaseEverythingElse = uppercaseFirstLetter(string, {
 *     lowercaseRest: true,
 * });
 * // lowercaseEverythingElse = "This is a string"
 * ```
 *
 * @category Convert
 */
export const uppercaseFirstLetter = (
    [first, ...rest]: string,
    options?: { lowercaseRest?: boolean; locale?: string },
): string =>
    [
        first.toLocaleUpperCase(options?.locale),
        ...(options?.lowercaseRest
            ? [...rest].join("").toLocaleLowerCase(options?.locale)
            : rest),
    ].join("");
