import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { intersperse } from "./intersperse";

interface Props {
    array: string;
    insertion: string;
}

export const Example = (props: Props) => {
    const [array, setArray] = useState(props.array);
    const [insertion, setInsertion] = useState(props.insertion);

    const { splitArray, splitInsertion, output } = useMemo(() => {
        const splitArray = array.split(/\s*,\s*/).filter((part) => part !== "");
        const splitInsertion = insertion.split(/\s*,\s*/).filter((part) => part !== "");
        const output = intersperse(splitArray, ...splitInsertion);
        return { splitArray, splitInsertion, output };
    }, [array, insertion]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Array" labelForId="array-input">
                    <input
                        id="array-input"
                        value={array}
                        onChange={({ target }) => setArray(target.value)}
                        spellCheck={false}
                    />
                </InputWrapper>

                <InputWrapper label="Insertion" labelForId="insertion-input">
                    <input
                        id="insertion-input"
                        value={insertion}
                        onChange={({ target }) => setInsertion(target.value)}
                        spellCheck={false}
                    />
                </InputWrapper>

                <InputWrapper label="Output" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>
                        <code>{JSON.stringify(output)}</code>
                    </div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { intersperse } from "@baggie/functions";

const array = ${JSON.stringify(splitArray)};
const insertion = ${JSON.stringify(
                    splitInsertion.length === 1 ? splitInsertion[0] : splitInsertion,
                )};

const output = intersperse(array, ${splitInsertion.length === 1 ? "" : "..."}insertion);
/*
output = ${JSON.stringify(output, null, 4)}
*/
`}
            />
        </>
    );
};
