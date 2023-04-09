/**
 * A regular expression for validating the format of a Danish CPR number
 * (personal identification number).
 *
 * Works with the birthdate and the four control digits combined or separated
 * by anything that's not a number.
 *
 * @remarks
 * **Be aware** that this does not check if the date is valid.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getCprRegex } from "@baggie/string";
 *
 * const cpr = "1706862134";
 * const isCprValid = cprRegex.test(cpr);
 * // isCprValid = true
 * ```
 */
export const getCprRegex = (): RegExp =>
    /^(?:(?:31(?:0[13578]|1[02])|(?:30|29)(?:0[13-9]|1[0-2])|(?:0[1-9]|1[0-9]|2[0-8])(?:0[1-9]|1[0-2]))[0-9]{2}\D*[0-9]|290200-?[4-9]|2902(?:(?!00)[02468][048]|[13579][26])-?[0-3])[0-9]{3}$/;
