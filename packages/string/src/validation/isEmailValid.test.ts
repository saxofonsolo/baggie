import { isEmailValid } from "./isEmailValid";

describe("isEmailValid", () => {
    test("Valid email", () => {
        expect(isEmailValid(`test@test.com`)).toBe(true);
        expect(isEmailValid(`tes-t.123@sub.te-st.co.uk`)).toBe(true);
    });

    test("Invalid email", () => {
        expect(isEmailValid(`test@test`)).toBe(false);
        expect(isEmailValid(`hey what's up`)).toBe(false);
    });

    test("Email from input element", () => {
        document.body.innerHTML = `<input id="email1" value="test@test.com"><input id="email2" value="test@test">`;
        const email1 = document.getElementById("email1");
        const email2 = document.getElementById("email2");
        expect(isEmailValid(email1 as HTMLInputElement)).toBe(true);
        expect(isEmailValid(email2 as HTMLInputElement)).toBe(false);
    });
});
