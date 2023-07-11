import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { ColorInput } from "../../_components/ColorInput/ColorInput";
import { convertStringToRgb } from "./convertStringToRgb";

interface Props {
    hex: string;
}

export const Example = (props: Props) => {
    const [hex, setHex] = useState(props.hex);

    const rgb = useMemo(() => {
        try {
            return convertStringToRgb(hex);
        } catch (err) {
            return undefined;
        }
    }, [hex]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <ColorInput label="Hex" value={hex} onChange={setHex} />
            </div>

            <div style={{ marginTop: "25px" }}>
                <table style={{ margin: 0 }}>
                    <tbody>
                        <tr>
                            <td>
                                <b>Red:</b>
                            </td>
                            <td>{rgb ? rgb.red : ""}</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Green:</b>
                            </td>
                            <td>{rgb ? rgb.green : ""}</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Blue:</b>
                            </td>
                            <td>{rgb ? rgb.blue : ""}</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Alpha:</b>
                            </td>
                            <td>{rgb ? rgb.alpha : ""}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Source
                dark
                code={`
import { convertStringToRgb } from "@baggie/core";

const hex = ${hex ? `"${hex}"` : "undefined"};

const rgb = convertStringToRgb(hex);
/*
rgb = ${JSON.stringify(rgb, null, 4)}
*/
`}
            />
        </>
    );
};
