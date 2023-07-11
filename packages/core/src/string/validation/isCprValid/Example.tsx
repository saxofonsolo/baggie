import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { isCprValid } from "./isCprValid";

interface Props {
    cprNumber: string;
}

export const Example = (props: Props) => {
    const [cpr, setCpr] = useState(props.cprNumber);
    const [gender, setGender] = useState("");

    const isValid = useMemo(() => isCprValid(cpr, (gender as "f") || undefined), [cpr, gender]);

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <InputWrapper label="CPR number" labelForId="cpr-input">
                    <input
                        id="cpr-input"
                        value={cpr}
                        onChange={({ target }) => setCpr(target.value)}
                        spellCheck={false}
                    />
                </InputWrapper>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        checked={gender === ""}
                        onChange={() => setGender(() => "")}
                    />{" "}
                    Don&apos;t check gender
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        checked={gender === "f"}
                        onChange={() => setGender(() => "f")}
                    />{" "}
                    Female
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        checked={gender === "m"}
                        onChange={() => setGender(() => "m")}
                    />{" "}
                    Male
                </label>
            </div>

            <Source
                dark
                code={`
import { convertEmailsToLinks } from "@baggie/core";

const cprNumber = "${cpr}";
${gender ? `const gender = ${gender ? `"${gender}"` : ""};\n` : ""}
const isValid = isCprValid(cprNumber${gender ? ", gender" : ""});
// isValid = ${isValid ? "true" : "false"}
`}
            />
        </>
    );
};
