import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { splitAtSpace } from "../../manipulation/splitAtSpace/splitAtSpace";
import { convertEmailsToLinks } from "./convertEmailsToLinks";

interface Props {
    defaultInput: string;
    subject?: string;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.defaultInput);
    const [subject, setSubject] = useState(props.subject);
    const [autoSubject, setAutoSubject] = useState(false);

    const output = useMemo(
        () => convertEmailsToLinks(input, { subject: autoSubject || subject || undefined }),
        [input, subject, autoSubject],
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
                        rows={3}
                    />
                </InputWrapper>

                <InputWrapper label="Subject" labelForId="subject-input">
                    <input
                        id="subject-input"
                        value={subject}
                        onChange={({ target }) => setSubject(target.value)}
                        disabled={autoSubject}
                    />
                </InputWrapper>

                <label>
                    <input
                        type="checkbox"
                        checked={autoSubject}
                        onChange={() => setAutoSubject((current) => !current)}
                    />
                    Set subject automatically
                </label>
            </div>

            <Source
                dark
                code={`
import { convertEmailsToLinks } from "@baggie/string";

const input = \`${splitAtSpace(input.replace(/`/g, "\\`"), 80).join("\n")}\`;
${
    autoSubject || subject
        ? `const subject = ${autoSubject ? "true" : `"${subject as string}"`};\n`
        : ""
}
const output = convertEmailsToLinks(input${autoSubject || subject ? ", { subject }" : ""});
/*
output = \`${splitAtSpace(output, 80).join("\n")}\`
*/
`}
            />
        </>
    );
};
