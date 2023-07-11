import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getYouTubeIdRegex } from "./getYouTubeIdRegex";

interface Props {
    string: string;
}

export const Example = (props: Props) => {
    const [string, setString] = useState(props.string);
    const match = useMemo(() => string.match(getYouTubeIdRegex()), [string]);

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
import { getYouTubeIdRegex } from "@baggie/core";

const string = "${string}";

const matchYouTubeId = string.match(getYouTubeIdRegex());
// matchYouTubeId = ${JSON.stringify(match)}
`}
            />

            <b>The returned regex:</b>

            <Source
                dark
                code={`new RegExp("${getYouTubeIdRegex().source}", "${getYouTubeIdRegex().flags}")`}
            />
        </>
    );
};
