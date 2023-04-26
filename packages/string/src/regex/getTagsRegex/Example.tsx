import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getTagsRegex } from "./getTagsRegex";

interface Props {
    string: string;
}

export const Example = (props: Props) => {
    const [string, setString] = useState(props.string);
    const [groupSequentialTags, setGroupSequentialTags] = useState(false);

    const match = useMemo(
        () => string.match(getTagsRegex(groupSequentialTags)),
        [string, groupSequentialTags],
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
                    checked={groupSequentialTags}
                    onChange={() => setGroupSequentialTags((x) => !x)}
                />{" "}
                Group sequential tags
            </label>

            <Source
                dark
                code={`
import { getTagsRegex } from "@baggie/string";

const string = "${string}";

const tags = string.match(getTagsRegex(${groupSequentialTags ? "true" : ""}));
// tags = ${JSON.stringify(match)}
`}
            />

            <b>The returned regex:</b>

            <Source
                dark
                code={`new RegExp("${getTagsRegex(groupSequentialTags).source}", "${
                    getTagsRegex(groupSequentialTags).flags
                }")`}
            />
        </>
    );
};
