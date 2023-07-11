import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getYouTubeId } from "./getYouTubeId";

interface Props {
    input: string;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.input);

    const id = useMemo(() => getYouTubeId(input), [input]);

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
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

                <InputWrapper label="ID" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{id || "undefined"}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getYouTubeId } from "@baggie/core";

const input = \`${input}\`;

const id = getYouTubeId(input);
// id = ${id ? `"${id}"` : "undefined"}
`}
            />
        </>
    );
};
