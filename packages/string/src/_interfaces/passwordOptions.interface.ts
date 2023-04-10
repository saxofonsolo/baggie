/**
 * @category Interfaces
 */
export interface PasswordOptions {
    minLength?: number;
    maxLength?: number;
    minDigits?: number;
    minLowercase?: number;
    minUppercase?: number;
    minSpecial?: number;
    specialCharacters?: string;
    forbiddenCharacters?: string;
    allowUnicode?: boolean;
}
