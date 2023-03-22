import { getPasswordRegex } from "../regex/getPasswordRegex";
import { PasswordOptions } from "../_interfaces/passwordOptions.interface";

/**
 * Check if a password is valid.
 *
 * Accept a string or an input element.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { isPasswordValid } from "@baggie/string";
 *
 * const validPassword = isPasswordValid("abcABC_123");
 * // validPassword = true
 *
 * const invalidPassword = isPasswordValid("hey");
 * // invalidPassword = false
 *
 * const passwordInput = document.querySelector("form input.password");
 * if (isPasswordValid(passwordInput)) {
 *     // The entered password is valid
 * }
 * ```
 *
 * @category Validation
 */
export const isPasswordValid = (
    password: string | HTMLInputElement,
    options?: PasswordOptions,
): boolean =>
    getPasswordRegex(options).test(
        typeof password === "string" ? password : password.value,
    );
