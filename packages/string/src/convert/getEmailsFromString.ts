import { getEmailRegex } from "../regex/getEmailRegex";

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
 */
export const getEmailsFromString = (string: string): string[] =>
    string.match(getEmailRegex(true)) || [];
