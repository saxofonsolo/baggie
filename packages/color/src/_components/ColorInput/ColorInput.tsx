import React, { useCallback, useId } from "react";
import { InputWrapper } from "@baggie/react";
import { normalizeHexColor } from "../../convert/normalizeHexColor";
import { convertColorNameToHex } from "../../convert/convertColorNameToHex";
import { isHexColor } from "../../check/isHexColor/isHexColor";
import S from "./ColorInput.module.scss";

interface Props
    extends Omit<
        React.ComponentProps<typeof InputWrapper>,
        "label" | "labelForId" | "children"
    > {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export const ColorInput = (props: Props) => {
    const id = useId();

    const onKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
                const trimmed = props.value.trim();
                const startsWithHash = trimmed.startsWith("#");
                if (!startsWithHash) {
                    const hex = convertColorNameToHex(trimmed) || `#${trimmed}`;
                    if (isHexColor(hex)) {
                        props.onChange(hex);
                    }
                }
            }
        },
        [props],
    );

    return (
        <InputWrapper label={props.label} labelForId={id}>
            <input
                type="color"
                value={normalizeHexColor(props.value).substring(0, 7)}
                onChange={({ target }) => props.onChange(target.value)}
                className={S.colorInput}
            />
            <input
                id={id}
                value={props.value}
                onChange={({ target }) => props.onChange(target.value)}
                className={S.textInput}
                onKeyDown={onKeyDown}
            />
        </InputWrapper>
    );
};
