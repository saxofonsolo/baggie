import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { floorDecimals } from "./floorDecimals";

interface Props {
    number: number;
    maxDecimalPlaces: number;
}

export const Example = (props: Props) => {
    const [number, setNumber] = useState(props.number);
    const [maxDecimalPlaces, setMaxDecimalPlaces] = useState(props.maxDecimalPlaces);

    const result = useMemo(
        () => floorDecimals(number, maxDecimalPlaces),
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
                    <div style={{ padding: "5px 0" }}>{isNaN(result) ? "Error" : result}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { floorDecimals } from "@baggie/core";

const number = ${number};
const maxDecimalPlaces = ${maxDecimalPlaces};

const result = floorDecimals(number, maxDecimalPlaces);
// result = ${result}
`}
            />
        </>
    );
};
