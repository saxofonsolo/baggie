/* Convert */
export { convertEmailsToLinks } from "./convert/convertEmailsToLinks";
export { convertNewLinesToBreaks } from "./convert/convertNewLinesToBreaks";
export { convertToDate } from "./convert/convertToDate";
export { stripTags } from "./convert/stripTags";

/* Interfaces */
export type { PasswordOptions } from "./_interfaces/passwordOptions.interface";

/* Regex */
export { getEmailRegex } from "./regex/getEmailRegex";
export { getNewLineRegex } from "./regex/getNewLineRegex";
export {
    getPasswordRegex,
    passwordSpecialCharactersDefault,
} from "./regex/getPasswordRegex";
export { getTagsRegex } from "./regex/getTagsRegex";

/* Validation */
export { isEmailValid } from "./validation/isEmailValid";
export { isPasswordValid } from "./validation/isPasswordValid";
