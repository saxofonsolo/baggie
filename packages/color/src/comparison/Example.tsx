import React, { useMemo, useRef, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { ColorInput } from "../_components/ColorInput/ColorInput";
import { isHexColor } from "../check/isHexColor/isHexColor";
import { ColorComparison } from "./colorComparison";

interface Props {
    compareColor: string;
    colors: string[];
}

export const Example = (props: Props) => {
    const [compareColor, setCompareColor] = useState(props.compareColor);
    const [amount, setAmount] = useState<number>();
    const [colors, setColors] = useState(props.colors);
    const comparisonRef = useRef(new ColorComparison(colors));

    const realColors = useMemo(() => colors.filter((color) => isHexColor(color)), [colors]);
    const { nearest, farthest } = useMemo(() => {
        try {
            comparisonRef.current.reset();
            comparisonRef.current.add(realColors);
            return {
                nearest: comparisonRef.current.nearest(compareColor, amount),
                farthest: comparisonRef.current.farthest(compareColor, amount),
            };
        } catch (err) {
            return { nearest: undefined, farthest: undefined };
        }
    }, [realColors, compareColor, amount]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "10px" }}>
                <ColorInput
                    label="Compare color"
                    value={compareColor}
                    onChange={(x) => setCompareColor(x)}
                />
                <InputWrapper label="Amount" labelForId="amount-input">
                    <input
                        id="amount-input"
                        type="number"
                        value={amount}
                        onChange={({ target }) => setAmount(target.valueAsNumber)}
                    />
                </InputWrapper>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {colors.map((color, index) => (
                    <ColorInput
                        key={`${index}--${color}`}
                        label={`Color ${index + 1}`}
                        value={color}
                        onChange={(nc) =>
                            setColors((x) => {
                                const newColors = [...x];
                                newColors[index] = nc;
                                return newColors;
                            })
                        }
                    />
                ))}
            </div>

            <div style={{ marginTop: 20 }}>
                <InputWrapper label="Nearest" labelForId={undefined}>
                    <div
                        style={{
                            display: "grid",
                            gridAutoColumns: "minmax(0, 1fr)",
                            gridAutoFlow: "column",
                        }}
                    >
                        {nearest?.map((x, index) => (
                            <div
                                key={`nearest-${index}-${x}`}
                                style={{ height: "50px", background: x }}
                            />
                        ))}
                    </div>
                </InputWrapper>
            </div>

            <div style={{ marginTop: 20 }}>
                <InputWrapper label="Farthest" labelForId={undefined}>
                    <div
                        style={{
                            display: "grid",
                            gridAutoColumns: "minmax(0, 1fr)",
                            gridAutoFlow: "column",
                        }}
                    >
                        {farthest?.map((x, index) => (
                            <div
                                key={`nearest-${index}-${x}`}
                                style={{ height: "50px", background: x }}
                            />
                        ))}
                    </div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { ColorComparison } from "@baggie/color";

const colors = ${JSON.stringify(realColors, null, 4)};

const compare = new ColorComparison(colors);

const nearest = compare.nearest("${compareColor}"${amount ? `, ${amount}` : ""});
/*
nearest = ${JSON.stringify(nearest, null, 4)}
*/

const farthest = compare.farthest("${compareColor}"${amount ? `, ${amount}` : ""});
/*
farthest = ${JSON.stringify(farthest, null, 4)}
*/
`}
            />
        </>
    );
};
