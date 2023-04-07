import React, { useCallback, useId, useState } from "react";
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

export const ColorInput = React.forwardRef<HTMLInputElement, Props>(
    (props, ref) => {
        const [hasFocus, setHasFocus] = useState(false);
        const id = useId();

        const convertValue = useCallback(() => {
            const trimmed = props.value.trim();
            const startsWithHash = trimmed.startsWith("#");
            if (!startsWithHash) {
                const hex = convertColorNameToHex(trimmed) || `#${trimmed}`;
                if (isHexColor(hex)) {
                    props.onChange(hex);
                }
            }
        }, [props]);

        const onKeyDown = useCallback(
            (event: React.KeyboardEvent<HTMLInputElement>) => {
                if (event.key === "Enter") {
                    convertValue();
                }
            },
            [convertValue],
        );

        const onFocus = useCallback(() => {
            setHasFocus(true);
        }, []);

        const onBlur = useCallback(() => {
            setHasFocus(false);
            convertValue();
        }, [convertValue]);

        return (
            <InputWrapper label={props.label} labelForId={id}>
                <input
                    ref={ref}
                    id={id}
                    value={props.value}
                    onChange={({ target }) => props.onChange(target.value)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className={S.textInput}
                    onKeyDown={onKeyDown}
                    pattern="^#((([0-9a-f]{3}){1,2})|(([0-9a-f]{4}){1,2}))$"
                />
                <input
                    type="color"
                    value={normalizeHexColor(props.value).substring(0, 7)}
                    onChange={({ target }) => props.onChange(target.value)}
                    className={S.colorInput}
                    tabIndex={hasFocus ? undefined : -1}
                />
            </InputWrapper>
        );
    },
);

ColorInput.displayName = "ColorInput";
