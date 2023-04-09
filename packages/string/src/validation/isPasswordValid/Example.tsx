import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { isPasswordValid } from "./isPasswordValid";

interface Props {
    password?: string;
}

export const Example = (props: Props) => {
    const [password, setPassword] = useState(props.password || "");

    const isValid = useMemo(() => isPasswordValid(password), [password]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Password" labelForId="password-input">
                    <input
                        id="password-input"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        spellCheck={false}
                    />
                </InputWrapper>

                <InputWrapper label="Is valid" labelForId={undefined}>
                    {isValid ? "true" : "false"}
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { isPasswordValid } from "@baggie/string";

const password = \`${password.replace(/`/g, "\\`")}\`;
const isValid = isPasswordValid(password);
// isValid = ${isValid ? "true" : "false"}
`}
            />
        </>
    );
};
