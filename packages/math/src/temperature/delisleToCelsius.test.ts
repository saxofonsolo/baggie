import { delisleToCelsius } from "./delisleToCelsius";

describe("delisleToCelsius", () => {
    test("Convert Delisle to Celsius", () => {
        expect(delisleToCelsius(559.7249999999999)).toBe(-273.1499999999999);
        expect(delisleToCelsius(150)).toBe(0);
        expect(delisleToCelsius(0)).toBe(100);
        expect(delisleToCelsius(-150)).toBe(200);
        expect(delisleToCelsius(-300)).toBe(300);
    });
});
