import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { isNumberRound } from "./isNumberRound";

interface Props {
    number: number;
    maxDecimalPlaces: number;
}

export const Example = (props: Props) => {
    const [number, setNumber] = useState(props.number);
    const [maxDecimalPlaces, setMaxDecimalPlaces] = useState(props.maxDecimalPlaces);

    const result = useMemo(
        () => isNumberRound(number, maxDecimalPlaces),
        [number, maxDecimalPlaces],
    );

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

                <InputWrapper label="Max decimal places" labelForId="max-decimal-places-input">
                    <input
                        id="max-decimal-places-input"
                        type="number"
                        value={maxDecimalPlaces}
                        onChange={({ target }) => setMaxDecimalPlaces(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Result" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{result ? "true" : "false"}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { isNumberRound } from "@baggie/core";

const number = ${number};
const maxDecimalPlaces = ${maxDecimalPlaces};

const result = isNumberRound(number, maxDecimalPlaces);
// result = ${result ? "true" : "false"}
`}
            />
        </>
    );
};
