import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { floorToMultipleOf } from "./floorToMultipleOf";

interface Props {
    number: number;
    multipleOf: number;
}

export const Example = (props: Props) => {
    const [number, setNumber] = useState(props.number);
    const [multipleOf, setMultipleOf] = useState(props.multipleOf);

    const result = useMemo(() => floorToMultipleOf(number, multipleOf), [number, multipleOf]);

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
                    <div style={{ padding: "5px" }}>{isNaN(result) ? "Error" : result}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { floorToMultipleOf } from "@baggie/math";

const number = ${number};
const multipleOf = ${multipleOf};

const result = floorToMultipleOf(number, multipleOf);
// result = ${result}
`}
            />
        </>
    );
};
