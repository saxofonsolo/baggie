import { isCprValid } from "./isCprValid";

describe("isCprValid", () => {
    test("CPR with valid date", () => {
        expect(isCprValid(`300186-2134`)).toBe(true);
    });

    test("CPR with invalid date", () => {
        expect(isCprValid(`300286-2134`)).toBe(false);
    });

    test("CPR with valid gender", () => {
        expect(isCprValid(`300186-2134`, "f")).toBe(true);
    });

    test("CPR with invalid gender", () => {
        expect(isCprValid(`300186-2134`, "m")).toBe(false);
    });

    test("CPR from input element", () => {
        document.body.innerHTML = `<input id="cpr1" value="300186-2134"><input id="cpr2" value="300286-2134">`;
        const cpr1 = document.getElementById("cpr1");
        const cpr2 = document.getElementById("cpr2");
        expect(isCprValid(cpr1 as HTMLInputElement)).toBe(true);
        expect(isCprValid(cpr2 as HTMLInputElement)).toBe(false);
    });
});
