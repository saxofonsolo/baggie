import { getEmailRegex } from "./getEmailRegex";

describe("getEmailRegex", () => {
    test("Get a single email address", () => {
        expect(
            `This text has a single email@address.com.`.match(getEmailRegex())
        ).toStrictEqual(["email@address.com"]);
    });

    test("Get multiple email addresses", () => {
        expect(
            `Contact me at email@address.com or another-email@danish.dk.`.match(
                getEmailRegex()
            )
        ).toStrictEqual(["email@address.com", "another-email@danish.dk"]);
    });

    test("Get no email addresses", () => {
        expect(`Contact me on my phone.`.match(getEmailRegex())).toStrictEqual(
            null
        );
    });
});
