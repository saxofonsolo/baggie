import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { uppercaseFirstLetter } from "./uppercaseFirstLetter";

interface Props {
    defaultInput: string;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.defaultInput);
    const [lowercaseRest, setLowercaseRest] = useState(false);

    const output = useMemo(
        () => uppercaseFirstLetter(input, { lowercaseRest }),
        [input, lowercaseRest],
    );

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <InputWrapper label="Input" labelForId="input-input">
                    <textarea
                        id="input-input"
                        value={input}
                        onChange={({ target }) => setInput(target.value)}
                        style={{ width: "100%", maxWidth: "360px" }}
                        spellCheck={false}
                        rows={1}
                    />
                </InputWrapper>

                <label>
                    <input
                        type="checkbox"
                        checked={lowercaseRest}
                        onChange={() => setLowercaseRest((current) => !current)}
                    />
                    Lowercase rest
                </label>
            </div>

            <Source
                dark
                code={`
import { uppercaseFirstLetter } from "@baggie/string";

const input = \`${input.replace(/`/g, "\\`")}\`;

const output = uppercaseFirstLetter(input${lowercaseRest ? ", { lowercaseRest: true }" : ""});
/*
output = \`${output}\`
*/
`}
            />
        </>
    );
};
