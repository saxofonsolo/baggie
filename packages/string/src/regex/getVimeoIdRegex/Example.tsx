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
                <input
                    id="string-input"
                    value={string}
                    onChange={({ target }) => setString(target.value)}
                    spellCheck={false}
                />
            </InputWrapper>

            <Source
                dark
                code={`
import { getVimeoIdRegex } from "@baggie/string";

const string = "${string}";

const matchVimeoId = string.match(getVimeoIdRegex());
/*
matchVimeoId = ${JSON.stringify(match)}
*/
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
