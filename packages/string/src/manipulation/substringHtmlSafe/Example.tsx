import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { substringHtmlSafe } from "./substringHtmlSafe";

interface Props {
    defaultInput: string;
    start: number;
    end?: number;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.defaultInput);
    const [start, setStart] = useState(props.start);
    const [end, setEnd] = useState(props.end);

    const output = useMemo(() => substringHtmlSafe(input, start, end), [input, start, end]);

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <InputWrapper label="Input" labelForId="input-input">
                    <textarea
                        id="input-input"
                        value={input}
                        onChange={({ target }) => setInput(target.value)}
                        style={{ width: "100%", maxWidth: "360px" }}
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
            </div>

            <Source
                dark
                code={`
import { substringHtmlSafe } from "@baggie/string";

const input = \`${input.replace(/`/g, "\\`")}\`;

const indexStart = ${start};
const indexEnd = ${isNaN(end as number) ? "undefined" : (end as number)};

const output = substringHtmlSafe(input, indexStart, indexEnd);
/*
output = \`${output}\`
*/
`}
            />
        </>
    );
};
