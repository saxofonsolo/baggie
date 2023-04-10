import { getPasswordRegex } from "../../regex/getPasswordRegex";
import { PasswordOptions } from "../../_interfaces/passwordOptions.interface";

/**
 * Check if a password is valid.
 */
export const isPasswordValid = (
    password: string | HTMLInputElement,
    options?: PasswordOptions,
): boolean =>
    getPasswordRegex(options).test(
        typeof password === "string" ? password : password.value,
    );
