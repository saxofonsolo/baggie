import { getEmailRegex } from "..";

/**
 * Find email addresses in a string and convert them to links.
 *
 * @category Convert
 */
export function convertEmailsToLinks(
    string: string,
    subject: boolean | string = false
) {
    const setSubject = !!subject;
    const subjectString = `?subject=${
        typeof subject === "string"
            ? subject
            : `${document.title} @ ${window.location.href}`
    }`;
    return string.replace(
        getEmailRegex(true),
        (match) =>
            `<a href="mailto:${
                match + (setSubject ? subjectString : "")
            }">${match}</a>`
    );
}
