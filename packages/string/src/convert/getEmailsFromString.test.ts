import { getEmailsFromString } from "./getEmailsFromString";

describe("getEmailsFromString", () => {
    test("Get a single email address", () => {
        expect(
            getEmailsFromString(`This text has a single email@address.com.`)
        ).toStrictEqual(["email@address.com"]);
    });

    test("Get multiple email addresses", () => {
        expect(
            getEmailsFromString(
                `Contact me at email@address.com or another-email@danish.dk.`
            )
        ).toStrictEqual(["email@address.com", "another-email@danish.dk"]);
    });

    test("Get no email addresses", () => {
        expect(getEmailsFromString(`Contact me on my phone.`)).toStrictEqual(
            []
        );
    });
});
