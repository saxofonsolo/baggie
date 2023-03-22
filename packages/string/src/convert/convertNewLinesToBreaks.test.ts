import { convertNewLinesToBreaks } from "./convertNewLinesToBreaks";

describe("newLineToBreak", () => {
    test("Replace single new line with <br /> and remove whitespace", () => {
        expect(
            convertNewLinesToBreaks(`hey nå, hvasså
        eller hvad?`),
        ).toBe(`hey nå, hvasså<br />eller hvad?`);
    });

    test("Replace multiple new lines with <br /> and remove whitespace", () => {
        expect(
            convertNewLinesToBreaks(`hey nå, hvasså
        der
        eller hvad?`),
        ).toBe(`hey nå, hvasså<br />der<br />eller hvad?`);
    });

    test("Replace multiple continuous new lines with <br /> and remove whitespace", () => {
        expect(
            convertNewLinesToBreaks(`hey nå, hvasså



        eller hvad?`),
        ).toBe(`hey nå, hvasså<br /><br /><br /><br />eller hvad?`);
    });

    test("Replace single new line with <br /> and keep whitespace", () => {
        expect(
            convertNewLinesToBreaks(
                `hey nå, hvasså
        eller hvad?`,
                true,
            ),
        ).toBe(`hey nå, hvasså<br />        eller hvad?`);
    });

    test("Replace multiple new lines with <br /> and keep whitespace", () => {
        expect(
            convertNewLinesToBreaks(
                `hey nå, hvasså
        der
        eller hvad?`,
                true,
            ),
        ).toBe(`hey nå, hvasså<br />        der<br />        eller hvad?`);
    });

    test("Replace multiple continuous new lines with <br /> and keep whitespace", () => {
        expect(
            convertNewLinesToBreaks(
                `hey nå, hvasså



        eller hvad?`,
                true,
            ),
        ).toBe(`hey nå, hvasså<br /><br /><br /><br />        eller hvad?`);
    });
});
