import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { stripTagsFromString } from "./stripTagsFromString";

interface Props {
    string: string;
    replaceWith?: string;
}

export const Example = (props: Props) => {
    const [string, setString] = useState(props.string);
    const [replaceWith, setReplaceWith] = useState(props.replaceWith || " ");
    const [trim, setTrim] = useState(true);

    const output = useMemo(
        () => stripTagsFromString(string, replaceWith, trim),
        [string, replaceWith, trim],
    );

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

                <div style={{ display: "flex", gap: "10px" }}>
                    <InputWrapper label="Replace with" labelForId="replace-with-input">
                        <input
                            id="replace-with-input"
                            value={replaceWith}
                            onChange={({ target }) => setReplaceWith(target.value)}
                        />
                    </InputWrapper>

                    <label>
                        <input
                            type="checkbox"
                            checked={trim}
                            onChange={() => setTrim((current) => !current)}
                        />{" "}
                        Trim
                    </label>
                </div>
            </div>

            <Source
                dark
                code={`
import { stripTagsFromString } from "@baggie/string";

const string = \`${string.replace(/`/g, "\\`")}\`;
${replaceWith === " " ? "" : `const replaceWith = "${replaceWith}";\n`}
const output = stripTagsFromString(input${
                    replaceWith === " " ? (trim ? "" : ", undefined") : ", replaceWith"
                }${trim ? "" : ", false"});
/*
output = ${JSON.stringify(output, null, 4)}
*/
`}
            />
        </>
    );
};
