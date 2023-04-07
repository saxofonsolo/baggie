import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { splitAtSpace } from "./splitAtSpace";

interface Props {
    string: string;
    nearestIndex: number;
}

export const Example = (props: Props) => {
    const [string, setString] = useState(props.string);
    const [nearestIndex, setNearestIndex] = useState(props.nearestIndex);

    const output = useMemo(() => splitAtSpace(string, nearestIndex), [string, nearestIndex]);

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <InputWrapper label="String" labelForId="string-input">
                    <textarea
                        id="string-input"
                        value={string}
                        onChange={({ target }) => setString(target.value)}
                        style={{ width: "100%", maxWidth: "360px" }}
                        spellCheck={false}
                        rows={3}
                    />
                </InputWrapper>

                <InputWrapper label="Nearest index" labelForId="nearest-index-input">
                    <input
                        id="nearest-index-input"
                        value={nearestIndex}
                        type="number"
                        onChange={({ target }) => setNearestIndex(target.valueAsNumber)}
                    />
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { splitAtSpace } from "@baggie/string";

const string = \`${string.replace(/`/g, "\\`")}\`;
const nearestIndex = ${nearestIndex};

const output = splitAtSpace(input, nearestIndex);
/*
output = ${JSON.stringify(output, null, 4)}
*/
`}
            />
        </>
    );
};
