import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { ColorViewer } from "../../_components/ColorViewer/ColorViewer";
import { convertRgbToHex } from "../convertRgbToHex/convertRgbToHex";
import { convertRgbToLab } from "./convertRgbToLab";

interface Props {
    red: number;
    green: number;
    blue: number;
    alpha: number;
}

export const Example = (props: Props) => {
    const [red, setRed] = useState(props.red);
    const [green, setGreen] = useState(props.green);
    const [blue, setBlue] = useState(props.blue);
    const [alpha, setAlpha] = useState(props.alpha);

    const hex = useMemo(
        () => convertRgbToHex({ red, green, blue, alpha }),
        [red, green, blue, alpha],
    );

    const lab = useMemo(
        () => convertRgbToLab({ red, green, blue, alpha }),
        [red, green, blue, alpha],
    );

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Red" labelRight={red} labelForId="red-input">
                    <input
                        id="red-input"
                        type="range"
                        min={0}
                        max={255}
                        step={1}
                        value={red}
                        onChange={({ target }) => setRed(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Green" labelRight={green} labelForId="green-input">
                    <input
                        id="green-input"
                        type="range"
                        min={0}
                        max={255}
                        step={1}
                        value={green}
                        onChange={({ target }) => setGreen(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Blue" labelRight={blue} labelForId="blue-input">
                    <input
                        id="blue-input"
                        type="range"
                        min={0}
                        max={255}
                        step={1}
                        value={blue}
                        onChange={({ target }) => setBlue(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Alpha" labelRight={alpha.toFixed(2)} labelForId="alpha-input">
                    <input
                        id="alpha-input"
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={alpha}
                        onChange={({ target }) => setAlpha(target.valueAsNumber)}
                    />
                </InputWrapper>
            </div>

            <div
                style={{
                    marginTop: "25px",
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                }}
            >
                <ColorViewer color={hex} />

                <table style={{ margin: 0 }}>
                    <tbody>
                        <tr>
                            <td>
                                <b>L (lightness):</b>
                            </td>
                            <td>{lab.l}</td>
                        </tr>
                        <tr>
                            <td>
                                <b>A (green–red):</b>
                            </td>
                            <td>{lab.a}</td>
                        </tr>
                        <tr>
                            <td>
                                <b>B (blue–yellow):</b>
                            </td>
                            <td>{lab.b}</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Alpha:</b>
                            </td>
                            <td>{lab.alpha}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Source
                dark
                code={`
import { convertRgbToLab } from "@baggie/color";

const rgb = {
   red: ${red},
   green: ${green},
   blue: ${blue},
   alpha: ${alpha},
};

const lab = convertRgbToLab(rgb);
/*
lab = ${JSON.stringify(lab, null, 4)}
*/
`}
            />
        </>
    );
};
