import { getEmailRegex } from "../regex/getEmailRegex";

/**
 * Find email addresses in a string and convert them to links.
 *
 * @category Convert
 */
export const convertEmailsToLinks = (
    string: string,
    subject: boolean | string = false,
): string => {
    const subjectString = subject
        ? `?subject=${
              typeof subject === "string"
                  ? subject
                  : `${document.title} @ ${window.location.href}`
          }`
        : "";
    return string.replace(
        getEmailRegex(true),
        (match) => `<a href="mailto:${match + subjectString}">${match}</a>`,
    );
};
