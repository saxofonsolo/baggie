import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getClosest } from "./getClosest";

interface Props {
    target: number;
    numbers: number[];
}

export const Example = (props: Props) => {
    const [target, setTarget] = useState(props.target);
    const [inputNumbers, setInputNumbers] = useState(props.numbers.join(", "));

    const { numbers, sorted } = useMemo(() => {
        const numbers = inputNumbers
            .split(/\s*,\s*/)
            .filter((value) => value.length)
            .map((string) => (string.match(/^-?[0-9]*\.?[0-9]*$/) ? parseFloat(string) : NaN));
        return { numbers, sorted: getClosest(target, numbers) };
    }, [target, inputNumbers]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Target" labelForId="target-input">
                    <input
                        id="target-input"
                        type="number"
                        value={target}
                        onChange={({ target }) => setTarget(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Numbers" labelForId="numbers-input">
                    <input
                        id="numbers-input"
                        value={inputNumbers}
                        onChange={({ target }) => setInputNumbers(target.value)}
                    />
                </InputWrapper>

                <InputWrapper label="Output" labelForId={undefined}>
                    <div style={{ padding: "5px" }}>{sorted.join(", ")}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getClosest } from "@baggie/math";

const target = ${target};
const numbers = [${numbers.join(", ")}];

const sorted = getClosest(target, numbers);
// sorted = ${sorted.join(", ")}
`}
            />
        </>
    );
};
