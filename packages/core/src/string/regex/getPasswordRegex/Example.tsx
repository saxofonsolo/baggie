import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getPasswordRegex, passwordSpecialCharactersDefault } from "./getPasswordRegex";

interface Props {
    password?: string;
}

export const Example = (props: Props) => {
    const [password, setPassword] = useState(props.password || "");
    const [minLength, setMinLength] = useState<number>();
    const [maxLength, setMaxLength] = useState<number>();
    const [minDigits, setMinDigits] = useState<number>();
    const [minLowercase, setMinLowercase] = useState<number>();
    const [minUppercase, setMinUppercase] = useState<number>();
    const [minSpecial, setMinSpecial] = useState<number>();
    const [specialCharacters, setSpecialCharacters] = useState<string>();
    const [forbiddenCharacters, setForbiddenCharacters] = useState<string>();
    const [allowUnicode, setAllowUnicode] = useState(false);

    const { options, isValid } = useMemo(() => {
        const optionsObj = {
            minLength,
            maxLength,
            minDigits,
            minLowercase,
            minUppercase,
            minSpecial,
            specialCharacters,
            forbiddenCharacters,
            allowUnicode,
        };

        return {
            options: Object.fromEntries(
                Object.entries(optionsObj).filter(
                    (entry) => typeof entry[1] !== "undefined" && entry[1] !== false,
                ),
            ),
            isValid: getPasswordRegex(optionsObj).test(password),
        };
    }, [
        password,
        minLength,
        maxLength,
        minDigits,
        minLowercase,
        minUppercase,
        minSpecial,
        specialCharacters,
        forbiddenCharacters,
        allowUnicode,
    ]);

    const hasOptionSet = Object.keys(options).length;

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
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
            <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <InputWrapper label="Min length" labelForId="minLength">
                    <input
                        id="minLength"
                        type="number"
                        value={isNaN(minLength as number) ? "" : minLength}
                        placeholder={Math.min(
                            8,
                            typeof maxLength === "undefined" ? 8 : maxLength,
                        ).toString()}
                        onChange={({ target }) =>
                            setMinLength(
                                isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber,
                            )
                        }
                    />
                </InputWrapper>

                <InputWrapper label="Max length" labelForId="maxLength">
                    <input
                        id="maxLength"
                        type="number"
                        value={isNaN(maxLength as number) ? "" : maxLength}
                        onChange={({ target }) =>
                            setMaxLength(
                                isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber,
                            )
                        }
                    />
                </InputWrapper>

                <InputWrapper label="Min digits" labelForId="minDigits">
                    <input
                        id="minDigits"
                        type="number"
                        value={isNaN(minDigits as number) ? "" : minDigits}
                        placeholder="1"
                        onChange={({ target }) =>
                            setMinDigits(
                                isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber,
                            )
                        }
                    />
                </InputWrapper>

                <InputWrapper label="Min lowercase" labelForId="minLowercase">
                    <input
                        id="minLowercase"
                        type="number"
                        value={isNaN(minLowercase as number) ? "" : minLowercase}
                        placeholder="1"
                        onChange={({ target }) =>
                            setMinLowercase(
                                isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber,
                            )
                        }
                    />
                </InputWrapper>

                <InputWrapper label="Min uppercase" labelForId="minUppercase">
                    <input
                        id="minUppercase"
                        type="number"
                        value={isNaN(minUppercase as number) ? "" : minUppercase}
                        placeholder="1"
                        onChange={({ target }) =>
                            setMinUppercase(
                                isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber,
                            )
                        }
                    />
                </InputWrapper>

                <InputWrapper label="Min special" labelForId="minSpecial">
                    <input
                        id="minSpecial"
                        type="number"
                        value={isNaN(minSpecial as number) ? "" : minSpecial}
                        placeholder="1"
                        onChange={({ target }) =>
                            setMinSpecial(
                                isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber,
                            )
                        }
                    />
                </InputWrapper>

                <InputWrapper label="Special characters" labelForId="specialCharacters">
                    <input
                        id="specialCharacters"
                        value={specialCharacters || ""}
                        placeholder={passwordSpecialCharactersDefault}
                        onChange={({ target }) => setSpecialCharacters(target.value || undefined)}
                    />
                </InputWrapper>

                <InputWrapper label="Forbidden characters" labelForId="forbiddenCharacters">
                    <input
                        id="forbiddenCharacters"
                        value={forbiddenCharacters || ""}
                        onChange={({ target }) => setForbiddenCharacters(target.value || undefined)}
                    />
                </InputWrapper>

                <InputWrapper label="Allow unicode" labelForId="allowUnicode">
                    <input
                        id="allowUnicode"
                        type="checkbox"
                        checked={allowUnicode}
                        onChange={() => setAllowUnicode((current) => !current)}
                    />
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getPasswordRegex } from "@baggie/core";

const password = \`${password.replace(/`/g, "\\`")}\`;
${hasOptionSet ? `const options = ${JSON.stringify(options, null, 4)};\n` : ""}
const isValid = getPasswordRegex(${hasOptionSet ? "options" : ""}).test(password);
// isValid = ${isValid ? "true" : "false"}
`}
            />

            <b>The returned regex:</b>

            <Source
                dark
                code={`new RegExp("${getPasswordRegex(options).source}", "${
                    getPasswordRegex(options).flags
                }")`}
            />
        </>
    );
};
