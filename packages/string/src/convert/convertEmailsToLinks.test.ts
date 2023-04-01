import { convertEmailsToLinks } from "./convertEmailsToLinks";

describe("convertEmailsToLinks", () => {
    test("Convert a single email address", () => {
        expect(
            convertEmailsToLinks(`This text has a single email@address.com.`),
        ).toBe(
            `This text has a single <a href="mailto:email@address.com">email@address.com</a>.`,
        );
    });

    test("Convert a single email address with automatic subject", () => {
        document.title = "Page title";
        expect(
            convertEmailsToLinks(`This text has a single email@address.com.`, {
                subject: true,
            }),
        ).toBe(
            `This text has a single <a href="mailto:email@address.com?subject=Page title @ http://localhost/">email@address.com</a>.`,
        );
    });

    test("Convert a single email address with custom subject", () => {
        expect(
            convertEmailsToLinks(`This text has a single email@address.com.`, {
                subject: "test subject",
            }),
        ).toBe(
            `This text has a single <a href="mailto:email@address.com?subject=test subject">email@address.com</a>.`,
        );
    });

    test("Convert multiple email addresses", () => {
        expect(
            convertEmailsToLinks(
                `Contact me at email@address.com or another-email@danish.dk.`,
            ),
        ).toBe(
            `Contact me at <a href="mailto:email@address.com">email@address.com</a> or <a href="mailto:another-email@danish.dk">another-email@danish.dk</a>.`,
        );
    });

    test("Convert with custom replacer", () => {
        document.title = "Page title";
        expect(
            convertEmailsToLinks(
                `Contact me at email@address.com or another-email@danish.dk.`,
                {
                    subject: true,
                    replacer: ({ email, href }) =>
                        `<b><a href="${href}" title="${email}">e-post</a></b>`,
                },
            ),
        ).toBe(
            `Contact me at <b><a href="mailto:email@address.com?subject=Page title @ http://localhost/" title="email@address.com">e-post</a></b> or <b><a href="mailto:another-email@danish.dk?subject=Page title @ http://localhost/" title="another-email@danish.dk">e-post</a></b>.`,
        );
    });
});
