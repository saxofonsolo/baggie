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
});
