import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper, TextareaWithHighlights } from "@baggie/react";
import { substringHtmlEntitySafe } from "./substringHtmlEntitySafe";

interface Props {
    defaultInput: string;
    start: number;
    end?: number;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.defaultInput);
    const [start, setStart] = useState(props.start);
    const [end, setEnd] = useState(props.end);
    const [verbose, setVerbose] = useState(false);

    const { output, realIndexStart, realIndexEnd } = useMemo(
        () => substringHtmlEntitySafe(input, start, end, { verbose: true }),
        [input, start, end],
    );

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <InputWrapper label="Input" labelForId="input-input">
                    <TextareaWithHighlights
                        id="input-input"
                        value={input}
                        onChange={({ target }) => setInput(target.value)}
                        style={{ width: "100%", maxWidth: "360px" }}
                        highlights={[realIndexStart, realIndexEnd]}
                        spellCheck={false}
                        rows={3}
                    />
                </InputWrapper>

                <div style={{ display: "flex", gap: "10px" }}>
                    <InputWrapper label="Index start" labelForId="start-input">
                        <input
                            id="start-input"
                            type="number"
                            value={start}
                            onChange={({ target }) => setStart(target.valueAsNumber)}
                        />
                    </InputWrapper>

                    <InputWrapper label="Index end" labelForId="end-input">
                        <input
                            id="end-input"
                            type="number"
                            value={end}
                            onChange={({ target }) => setEnd(target.valueAsNumber)}
                        />
                    </InputWrapper>
                </div>

                <label>
                    <input
                        type="checkbox"
                        checked={verbose}
                        onChange={() => setVerbose((current) => !current)}
                    />
                    Verbose
                </label>
            </div>

            <Source
                dark
                code={`
import { substringHtmlEntitySafe } from "@baggie/string";

const input = \`${input.replace(/`/g, "\\`")}\`;

const indexStart = ${start || 0};
const indexEnd = ${isNaN(end as number) ? "undefined" : (end as number)};

const output = substringHtmlEntitySafe(input, indexStart, indexEnd${
                    verbose ? ", { verbose: true }" : ""
                });
/*
${
    verbose
        ? `output = ${JSON.stringify({ output, realIndexStart, realIndexEnd }, null, 4)}`
        : `output = \`${output}\``
}
*/
`}
            />
        </>
    );
};
