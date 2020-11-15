import { PasswordOptions } from "../_interfaces/passwordOptions.interface";

/**
 * A string with the default accepted special character used by
 * `getPasswordRegex`.
 *
 * @category Regex
 */
export const passwordSpecialCharactersDefault =
    " !\"#$%&'()*+,./:;<=>?@[]\\^_`{|}~¨-";

/**
 * Returns a regular expression to validate passwords with.
 *
 * Define your requirements for a valid password by setting the following parameters.
 * - minLength - defaults to `8`
 * - maxLength
 * - minDigits - defaults to `1`
 * - maxDigits
 * - minLowercase - defaults to `1`
 * - maxLowercase
 * - minUppercase - defaults to `1`
 * - maxUppercase
 * - minSpecial - defaults to `1`
 * - maxSpecial
 * - specialChars - defaults to {@link passwordSpecialCharactersDefault}
 * - forbiddenChars - default to `" "`
 * - acceptUnicode - defaults to `false`
 *
 * @category Regex
 */
export function getPasswordRegex(options?: PasswordOptions): RegExp {
    const passwordSettings: PasswordOptions = {
        minLength: 8,
        minDigits: 1,
        minLowercase: 1,
        minUppercase: 1,
        minSpecial: 1,
        specialChars: passwordSpecialCharactersDefault,
        forbiddenChars: " ",
        acceptUnicode: false,
        ...options,
    };

    const hasMaxLength = typeof passwordSettings.maxLength === "number";
    const hasMaxDigits = typeof passwordSettings.maxDigits === "number";
    const hasMaxLowercase = typeof passwordSettings.maxLowercase === "number";
    const hasMaxUppercase = typeof passwordSettings.maxUppercase === "number";
    const hasMaxSpecial = typeof passwordSettings.maxSpecial === "number";

    const lowercaseLetters = passwordSettings.acceptUnicode
        ? "\\p{Ll}"
        : "[a-z]";
    const uppercaseLetters = passwordSettings.acceptUnicode
        ? "\\p{Lu}"
        : "[A-Z]";
    const specialChars = passwordSettings.specialChars
        ? passwordSettings.specialChars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        : "";

    return new RegExp(
        `^${
            passwordSettings.forbiddenChars
                ? `(?!(?:.*[${passwordSettings.forbiddenChars}].*){1,})`
                : ""
        }(?=(?:.*${lowercaseLetters}.*){${passwordSettings.minLowercase}${
            !hasMaxLowercase ? "," : ""
        }})${
            hasMaxLowercase
                ? `(?!(?:.*${lowercaseLetters}.*){${
                      (passwordSettings.maxLowercase as number) + 1
                  },})`
                : ""
        }(?=(?:.*${uppercaseLetters}.*){${passwordSettings.minUppercase}${
            !hasMaxUppercase ? "," : ""
        }})${
            hasMaxUppercase
                ? `(?!(?:.*${uppercaseLetters}.*){${
                      (passwordSettings.maxUppercase as number) + 1
                  },})`
                : ""
        }(?=(?:.*\\d.*){${passwordSettings.minDigits}${
            !hasMaxDigits ? "," : ""
        }})${
            hasMaxDigits
                ? `(?!(?:.*\\d.*){${
                      (passwordSettings.maxDigits as number) + 1
                  },})`
                : ""
        }(?=(?:.*[${specialChars}].*){${passwordSettings.minSpecial}${
            !hasMaxSpecial ? "," : ""
        }})${
            hasMaxSpecial
                ? `(?!(?:.*[${specialChars}].*){${
                      (passwordSettings.maxSpecial as number) + 1
                  },})`
                : ""
        }.{${passwordSettings.minLength},${
            hasMaxLength ? passwordSettings.maxLength : ""
        }}$`,
        passwordSettings.acceptUnicode ? "u" : ""
    );
}
