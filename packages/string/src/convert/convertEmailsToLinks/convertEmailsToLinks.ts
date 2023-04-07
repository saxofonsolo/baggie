import { getEmailRegex } from "../../regex/getEmailRegex";

interface ReplacerArgs {
    email: string;
    href: string;
}

/**
 * Find email addresses in a string and convert them to links.
 */
export const convertEmailsToLinks = (
    string: string,
    options?: {
        subject?: string | boolean;
        replacer?: (args: ReplacerArgs) => string;
    },
): string => {
    const getReplacerArgs = (email: string): ReplacerArgs => ({
        email,
        href: `mailto:${
            email +
            (options?.subject
                ? `?subject=${
                      typeof options.subject === "string"
                          ? options.subject
                          : `${document.title} @ ${window.location.href}`
                  }`
                : "")
        }`,
    });
    const defaultReplacer = (args: ReplacerArgs) =>
        `<a href="${args.href}">${args.email}</a>`;

    return string.replace(getEmailRegex(true), (email) =>
        options?.replacer
            ? options.replacer(getReplacerArgs(email))
            : defaultReplacer(getReplacerArgs(email)),
    );
};
