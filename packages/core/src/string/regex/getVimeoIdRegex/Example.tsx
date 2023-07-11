import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getVimeoIdRegex } from "./getVimeoIdRegex";

interface Props {
    string: string;
}

export const Example = (props: Props) => {
    const [string, setString] = useState(props.string);
    const match = useMemo(() => string.match(getVimeoIdRegex()), [string]);

    return (
        <>
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

            <Source
                dark
                code={`
import { getVimeoIdRegex } from "@baggie/core";

const string = "${string}";

const matchVimeoId = string.match(getVimeoIdRegex());
// matchVimeoId = ${JSON.stringify(match)}
`}
            />

            <b>The returned regex:</b>

            <Source
                dark
                code={`new RegExp("${getVimeoIdRegex().source}", "${getVimeoIdRegex().flags}")`}
            />
        </>
    );
};
