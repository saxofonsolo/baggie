/**
 * Convert the first letter in a string to uppercase.
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
