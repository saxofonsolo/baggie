import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { passwordSpecialCharactersDefault } from "../../regex/getPasswordRegex";
import { isPasswordValid } from "./isPasswordValid";

interface Props {
    password?: string;
}

export const Example = (props: Props) => {
    const [password, setPassword] = useState(props.password || "");
    const [minLength, setMinLength] = useState<number>();
    const [maxLength, setMaxLength] = useState<number>();
    const [minDigits, setMinDigits] = useState<number>();
    const [maxDigits, setMaxDigits] = useState<number>();
    const [minLowercase, setMinLowercase] = useState<number>();
    const [maxLowercase, setMaxLowercase] = useState<number>();
    const [minUppercase, setMinUppercase] = useState<number>();
    const [maxUppercase, setMaxUppercase] = useState<number>();
    const [minSpecial, setMinSpecial] = useState<number>();
    const [maxSpecial, setMaxSpecial] = useState<number>();
    const [specialCharacters, setSpecialCharacters] = useState<string>();
    const [forbiddenCharacters, setForbiddenCharacters] = useState<string>();
    const [allowUnicode, setAllowUnicode] = useState(false);

    const { options, isValid } = useMemo(() => {
        const optionsObj = {
            minLength,
            maxLength,
            minDigits,
            maxDigits,
            minLowercase,
            maxLowercase,
            minUppercase,
            maxUppercase,
            minSpecial,
            maxSpecial,
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
            isValid: isPasswordValid(password, optionsObj),
        };
    }, [
        password,
        minLength,
        maxLength,
        minDigits,
        maxDigits,
        minLowercase,
        maxLowercase,
        minUppercase,
        maxUppercase,
        minSpecial,
        maxSpecial,
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
                        placeholder={Math.min(
                            1,
                            typeof maxDigits === "undefined" ? 1 : maxDigits,
                        ).toString()}
                        onChange={({ target }) =>
                            setMinDigits(
                                isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber,
                            )
                        }
                    />
                </InputWrapper>

                <InputWrapper label="Max digits" labelForId="maxDigits">
                    <input
                        id="maxDigits"
                        type="number"
                        value={isNaN(maxDigits as number) ? "" : maxDigits}
                        onChange={({ target }) =>
                            setMaxDigits(
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
                        placeholder={Math.min(
                            1,
                            typeof maxLowercase === "undefined" ? 1 : maxLowercase,
                        ).toString()}
                        onChange={({ target }) =>
                            setMinLowercase(
                                isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber,
                            )
                        }
                    />
                </InputWrapper>

                <InputWrapper label="Max lowercase" labelForId="maxLowercase">
                    <input
                        id="maxLowercase"
                        type="number"
                        value={isNaN(maxLowercase as number) ? "" : maxLowercase}
                        onChange={({ target }) =>
                            setMaxLowercase(
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
                        placeholder={Math.min(
                            1,
                            typeof maxUppercase === "undefined" ? 1 : maxUppercase,
                        ).toString()}
                        onChange={({ target }) =>
                            setMinUppercase(
                                isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber,
                            )
                        }
                    />
                </InputWrapper>

                <InputWrapper label="Max uppercase" labelForId="maxUppercase">
                    <input
                        id="maxUppercase"
                        type="number"
                        value={isNaN(maxUppercase as number) ? "" : maxUppercase}
                        onChange={({ target }) =>
                            setMaxUppercase(
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
                        placeholder={Math.min(
                            1,
                            typeof maxSpecial === "undefined" ? 1 : maxSpecial,
                        ).toString()}
                        onChange={({ target }) =>
                            setMinSpecial(
                                isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber,
                            )
                        }
                    />
                </InputWrapper>

                <InputWrapper label="Max special" labelForId="maxSpecial">
                    <input
                        id="maxSpecial"
                        type="number"
                        value={isNaN(maxSpecial as number) ? "" : maxSpecial}
                        onChange={({ target }) =>
                            setMaxSpecial(
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

                <InputWrapper label="Is valid" labelForId={undefined}>
                    {isValid ? "true" : "false"}
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { isPasswordValid } from "@baggie/string";

const password = \`${password.replace(/`/g, "\\`")}\`;
${hasOptionSet ? `const options = ${JSON.stringify(options, null, 4)};\n` : ""}
const isValid = isPasswordValid(password${hasOptionSet ? ", options" : ""});
// isValid = ${isValid ? "true" : "false"}
`}
            />
        </>
    );
};
