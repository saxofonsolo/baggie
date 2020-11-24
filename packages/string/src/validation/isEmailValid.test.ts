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
});
