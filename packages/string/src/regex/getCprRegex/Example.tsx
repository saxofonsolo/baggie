import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getCprRegex } from "./getCprRegex";

interface Props {
    cprNumber: string;
}

export const Example = (props: Props) => {
    const [cpr, setCpr] = useState(props.cprNumber);
    const isValid = useMemo(() => getCprRegex().test(cpr), [cpr]);

    return (
        <>
            <InputWrapper label="CPR number" labelForId="cpr-input">
                <input
                    id="cpr-input"
                    value={cpr}
                    onChange={({ target }) => setCpr(target.value)}
                    spellCheck={false}
                />
            </InputWrapper>

            <Source
                dark
                code={`
import { getCprRegex } from "@baggie/string";

const cprNumber = "${cpr}";

const isCprFormatValid = getCprRegex().test(cprNumber);
// isCprFormatValid = ${isValid ? "true" : "false"}
`}
            />

            <b>The returned regex:</b>

            <Source dark code={`new RegExp("${getCprRegex().source}", "${getCprRegex().flags}")`} />
        </>
    );
};
