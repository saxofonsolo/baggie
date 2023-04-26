import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { convertNewlinesToBreaks } from "./convertNewlinesToBreaks";

interface Props {
    input: string;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.input);
    const [keepWhitespace, setKeepWhitespace] = useState(false);

    const output = useMemo(
        () => convertNewlinesToBreaks(input, keepWhitespace),
        [input, keepWhitespace],
    );

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <InputWrapper label="Input" labelForId="input-input">
                    <textarea
                        id="input-input"
                        value={input}
                        onChange={({ target }) => setInput(target.value)}
                        style={{ width: "360px", maxWidth: "100%" }}
                        spellCheck={false}
                        rows={3}
                    />
                </InputWrapper>

                <label>
                    <input
                        type="checkbox"
                        checked={keepWhitespace}
                        onChange={() => setKeepWhitespace((current) => !current)}
                    />
                    Keep whitespace
                </label>
            </div>

            <Source
                dark
                code={`
import { convertNewlinesToBreaks } from "@baggie/string";

const string = \`${input}\`;
${keepWhitespace ? "const keepWhitespace = true;\n" : ""}
const output = convertNewlinesToBreaks(string${keepWhitespace ? ", keepWhitespace" : ""});
// output = ${output}
`}
            />
        </>
    );
};
