import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getNewlineRegex } from "./getNewlineRegex";

interface Props {
    string: string;
}

export const Example = (props: Props) => {
    const [string, setString] = useState(props.string);
    const [includeWhitespace, setIncludeWhitespace] = useState(false);

    const newString = useMemo(
        () => string.replace(getNewlineRegex(includeWhitespace), "-"),
        [string, includeWhitespace],
    );

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

            <label>
                <input
                    type="checkbox"
                    checked={includeWhitespace}
                    onChange={() => setIncludeWhitespace((x) => !x)}
                />{" "}
                Include whitespace
            </label>

            <Source
                dark
                code={`
import { getNewlineRegex } from "@baggie/core";

const string = \`${string}\`;

const newString = string.replace(getNewlineRegex(${includeWhitespace ? "true" : ""}), "-");
// newString = \`${newString}\`
`}
            />

            <b>The returned regex:</b>

            <Source
                dark
                code={`new RegExp("${getNewlineRegex(includeWhitespace).source}", "${
                    getNewlineRegex(includeWhitespace).flags
                }")`}
            />
        </>
    );
};
