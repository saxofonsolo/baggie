/* Convert */
export { convertEmailsToLinks } from "./convert/convertEmailsToLinks";
export { convertNewLinesToBreaks } from "./convert/convertNewLinesToBreaks";
export { convertToDate } from "./convert/convertToDate";

/* Interfaces */
export type { PasswordOptions } from "./_interfaces/passwordOptions.interface";

/* Regex */
export { getEmailRegex } from "./regex/getEmailRegex";
export { getNewLineRegex } from "./regex/getNewLineRegex";
export {
    getPasswordRegex,
    passwordSpecialCharactersDefault,
} from "./regex/getPasswordRegex";

/* Validation */
export { isEmailValid } from "./validation/isEmailValid";
export { isPasswordValid } from "./validation/isPasswordValid";
