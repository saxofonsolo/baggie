import { getEmailRegex } from "../regex/getEmailRegex";

/**
 * Check if an email address is valid.
 *
 * Accept a string or an input element.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { isEmailValid } from "@baggie/string";
 *
 * const checkString = isEmailValid("test@test.com");
 * // checkString = true
 *
 * const emailInput = document.querySelector("form input.email");
 * if (isEmailValid(emailInput)) {
 *     // The entered email address is valid
 * }
 * ```
 *
 * @category Validation
 */
export const isEmailValid = (email: string | HTMLInputElement): boolean =>
    getEmailRegex(false).test(typeof email === "string" ? email : email.value);
