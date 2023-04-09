import { PasswordOptions } from "../_interfaces/passwordOptions.interface";

/**
 * A string with the default accepted special character used by
 * `getPasswordRegex`.
 *
 * @category Regex
 */
export const passwordSpecialCharactersDefault =
    "!#$%&'()*+,./:;<=>?@[]\\^_`{|}~¨-";

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
 * - specialCharacters - defaults to {@link passwordSpecialCharactersDefault}
 * - forbiddenCharacters - default to `" "`
 * - allowUnicode - defaults to `false`
 *
 * @category Regex
 */
export const getPasswordRegex = (options?: PasswordOptions): RegExp => {
    const passwordSettings: PasswordOptions = {
        ...options,
        minLength: Math.max(
            0,
            typeof options?.minLength === "number"
                ? options.minLength
                : Math.min(8, options?.maxLength || Infinity),
        ),
        minDigits: Math.max(
            0,
            typeof options?.minDigits === "number" ? options.minDigits : 1,
            0,
        ),
        minLowercase: Math.max(
            0,
            typeof options?.minLowercase === "number"
                ? options.minLowercase
                : 1,
            0,
        ),
        minUppercase: Math.max(
            0,
            typeof options?.minUppercase === "number"
                ? options.minUppercase
                : 1,
            0,
        ),
        minSpecial: Math.max(
            0,
            typeof options?.minSpecial === "number" ? options.minSpecial : 1,
            0,
        ),
        specialCharacters:
            options?.specialCharacters || passwordSpecialCharactersDefault,
        forbiddenCharacters:
            typeof options?.forbiddenCharacters === "string"
                ? options.forbiddenCharacters
                : " ",
        allowUnicode: options?.allowUnicode || false,
    };

    const hasMaxLength = typeof passwordSettings.maxLength === "number";
    const hasMaxDigits = typeof passwordSettings.maxDigits === "number";
    const hasMaxLowercase = typeof passwordSettings.maxLowercase === "number";
    const hasMaxUppercase = typeof passwordSettings.maxUppercase === "number";
    const hasMaxSpecial = typeof passwordSettings.maxSpecial === "number";

    const lowercaseLetters = passwordSettings.allowUnicode
        ? "\\p{Ll}"
        : "[a-z]";
    const uppercaseLetters = passwordSettings.allowUnicode
        ? "\\p{Lu}"
        : "[A-Z]";
    const specialChars = passwordSettings.specialCharacters
        ? passwordSettings.specialCharacters.replace(/[\^\-\]\\]/g, "\\$&")
        : "";

    return new RegExp(
        `^${
            passwordSettings.forbiddenCharacters
                ? `(?!(?:.*[${passwordSettings.forbiddenCharacters}].*){1,})`
                : ""
        }(?=(.*${lowercaseLetters}.*){${
            passwordSettings.minLowercase as number
        }${!hasMaxLowercase ? "," : ""}})${
            hasMaxLowercase
                ? `(?!(?:.*${lowercaseLetters}.*){${
                      Math.max(
                          passwordSettings.minLowercase as number,
                          passwordSettings.maxLowercase as number,
                      ) + 1
                  },})`
                : ""
        }(?=(.*${uppercaseLetters}.*){${
            passwordSettings.minUppercase as number
        }${!hasMaxUppercase ? "," : ""}})${
            hasMaxUppercase
                ? `(?!(?:.*${uppercaseLetters}.*){${
                      Math.max(
                          passwordSettings.minUppercase as number,
                          passwordSettings.maxUppercase as number,
                      ) + 1
                  },})`
                : ""
        }(?=(.*\\d.*){${passwordSettings.minDigits as number}${
            !hasMaxDigits ? "," : ""
        }})${
            hasMaxDigits
                ? `(?!(?:.*\\d.*){${
                      Math.max(
                          passwordSettings.minDigits as number,
                          passwordSettings.maxDigits as number,
                      ) + 1
                  },})`
                : ""
        }(?=(.*[${specialChars}].*){${passwordSettings.minSpecial as number}${
            !hasMaxSpecial ? "," : ""
        }})${
            hasMaxSpecial
                ? `(?!(?:.*[${specialChars}].*){${
                      Math.max(
                          passwordSettings.minSpecial as number,
                          passwordSettings.maxSpecial as number,
                      ) + 1
                  },})`
                : ""
        }.{${passwordSettings.minLength as number},${
            hasMaxLength
                ? Math.max(
                      passwordSettings.minLength as number,
                      passwordSettings.maxLength as number,
                  )
                : ""
        }}$`,
        passwordSettings.allowUnicode ? "u" : "",
    );
};
