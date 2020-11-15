import { getEmailRegex } from "..";

/**
 * Returns email addresses in a string.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getEmailsFromString } from "@baggie/string";
 *
 * const string = "My private email is mail@private.com, but my business email is mail@business.com.";
 *
 * const foundEmails = getEmailsFromString(string);
 * // foundEmails = ["mail@private.com", "mail@business.com"]
 * ```
 *
 * @category Convert
 */
export function getEmailsFromString(string: string) {
    return string.match(getEmailRegex(true)) || [];
}
