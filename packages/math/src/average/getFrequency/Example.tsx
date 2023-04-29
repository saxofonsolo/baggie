import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getFrequency } from "./getFrequency";

interface Props {
    defaultInput: number[];
}

const printMap = (map: Map<any, any>) => {
    return (
        "Map {\n" +
        Array.from(map).reduce((obj, [key, value]) => {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            obj += `    ${typeof key === "string" ? `"${key}"` : JSON.parse(key)} => ${value},\n`;
            return obj;
        }, "") +
        "}"
    );
};

export const Example = (props: Props) => {
    const [inputString, setInputString] = useState(props.defaultInput.join(", "));
    const [returnMap, setReturnMap] = useState(false);

    const { input, result } = useMemo(() => {
        const inputs = inputString
            .split(/\s*,\s*/)
            .filter((value) => value.length)
            .map((string) => (string.match(/^-?[0-9]*\.?[0-9]*$/) ? parseFloat(string) : string));
        return { input: inputs, result: getFrequency(inputs, returnMap) };
    }, [inputString, returnMap]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Input" labelForId="input-input">
                    <input
                        id="input-input"
                        value={inputString}
                        onChange={({ target }) => setInputString(target.value)}
                    />
                </InputWrapper>
            </div>

            <label>
                <input
                    type="checkbox"
                    checked={returnMap}
                    onChange={() => setReturnMap((current) => !current)}
                />{" "}
                Return as Map object
            </label>

            <Source
                dark
                code={`
import { getFrequency } from "@baggie/math";

const input = [${input.map((item) => (typeof item === "string" ? `"${item}"` : item)).join(", ")}];

const result = getFrequency(input${returnMap ? ", true" : ""});
/*
result = ${returnMap ? printMap(result as Map<any, any>) : JSON.stringify(result, null, 4)}
*/
`}
            />
        </>
    );
};
