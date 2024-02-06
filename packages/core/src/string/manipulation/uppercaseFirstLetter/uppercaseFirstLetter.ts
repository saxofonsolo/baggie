/**
 * Convert the first letter in a string to uppercase.
 */
export function uppercaseFirstLetter(
    [first, ...rest]: string,
    options?: { lowercaseRest?: boolean; locale?: string | string[] },
): string {
    return [
        first.toLocaleUpperCase(options?.locale),
        ...(options?.lowercaseRest
            ? [...rest].join("").toLocaleLowerCase(options?.locale)
            : rest),
    ].join("");
}
