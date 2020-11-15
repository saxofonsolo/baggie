/**
 * @category Interfaces
 */
export interface PasswordOptions {
    minLength?: number;
    maxLength?: number;
    minDigits?: number;
    maxDigits?: number;
    minLowercase?: number;
    maxLowercase?: number;
    minUppercase?: number;
    maxUppercase?: number;
    minSpecial?: number;
    maxSpecial?: number;
    specialChars?: string;
    forbiddenChars?: string;
    acceptUnicode?: boolean;
}
