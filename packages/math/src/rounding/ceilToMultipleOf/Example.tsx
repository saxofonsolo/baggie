import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { ceilToMultipleOf } from "./ceilToMultipleOf";

interface Props {
    number: number;
    multipleOf: number;
}

export const Example = (props: Props) => {
    const [number, setNumber] = useState(props.number);
    const [multipleOf, setMultipleOf] = useState(props.multipleOf);

    const result = useMemo(() => ceilToMultipleOf(number, multipleOf), [number, multipleOf]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Number" labelForId="number-input">
                    <input
                        id="number-input"
                        type="number"
                        value={number}
                        onChange={({ target }) => setNumber(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Multiple of" labelForId="multiple-of-input">
                    <input
                        id="multiple-of-input"
                        type="number"
                        value={multipleOf}
                        onChange={({ target }) => setMultipleOf(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Result" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{isNaN(result) ? "Error" : result}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { ceilToMultipleOf } from "@baggie/math";

const number = ${number};
const multipleOf = ${multipleOf};

const result = ceilToMultipleOf(number, multipleOf);
// result = ${result}
`}
            />
        </>
    );
};
