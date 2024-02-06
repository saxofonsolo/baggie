import { getPasswordRegex } from "../../regex/getPasswordRegex/getPasswordRegex";
import { PasswordOptions } from "../../_interfaces/passwordOptions.interface";

/**
 * Check if a password is valid.
 */
export function isPasswordValid(
    password: string | HTMLInputElement,
    options?: PasswordOptions,
): boolean {
    return getPasswordRegex(options).test(
        typeof password === "string" ? password : password.value,
    );
}
