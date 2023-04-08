import React, { useCallback, useId, useState } from "react";
import { InputWrapper } from "@baggie/react";
import { normalizeHexColor } from "../../convert/normalizeHexColor";
import { convertColorNameToHex } from "../../convert/convertColorNameToHex";
import { isHexColor } from "../../check/isHexColor/isHexColor";
import S from "./ColorInput.module.scss";

type BaseProps = Omit<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >,
    "children" | "onChange" | "value" | "pattern" | "ref"
> &
    Omit<
        React.ComponentProps<typeof InputWrapper>,
        "label" | "labelForId" | "children"
    >;

interface Props extends BaseProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export const ColorInput = React.forwardRef<HTMLInputElement, Props>(
    (props, ref) => {
        const [hasFocus, setHasFocus] = useState(false);
        const {
            id,
            onChange,
            onBlur,
            onFocus,
            onKeyDown,
            value,
            label,
            labelRight,
            helperText,
            invalid,
            className,
            ...inputProps
        } = props;
        const autoId = useId();

        const convertValue = useCallback(() => {
            const trimmed = value.trim();
            const startsWithHash = trimmed.startsWith("#");
            if (!startsWithHash) {
                const hex = convertColorNameToHex(trimmed) || `#${trimmed}`;
                if (isHexColor(hex)) {
                    onChange(hex);
                }
            }
        }, [onChange, value]);

        const handleOnKeyDown = useCallback(
            (event: React.KeyboardEvent<HTMLInputElement>) => {
                if (event.key === "Enter") {
                    convertValue();
                }
                if (onKeyDown) {
                    onKeyDown(event);
                }
            },
            [convertValue, onKeyDown],
        );

        const handleOnFocus = useCallback(
            (event: React.FocusEvent<HTMLInputElement, HTMLInputElement>) => {
                setHasFocus(true);
                if (onFocus) {
                    onFocus(event);
                }
            },
            [onFocus],
        );

        const handleOnBlur = useCallback(
            (event: React.FocusEvent<HTMLInputElement, HTMLInputElement>) => {
                setHasFocus(false);
                convertValue();
                if (onBlur) {
                    onBlur(event);
                }
            },
            [convertValue, onBlur],
        );

        return (
            <InputWrapper
                label={label}
                labelForId={id || autoId}
                labelRight={labelRight}
                helperText={helperText}
                invalid={invalid}
            >
                <input
                    ref={ref}
                    id={id || autoId}
                    value={value}
                    onChange={({ target }) => onChange(target.value)}
                    onKeyDown={handleOnKeyDown}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    className={[S.textInput, className].join(" ").trim()}
                    pattern="^#((([0-9a-f]{3}){1,2})|(([0-9a-f]{4}){1,2}))$"
                    {...inputProps}
                />
                <input
                    type="color"
                    value={normalizeHexColor(value).substring(0, 7)}
                    onChange={({ target }) => onChange(target.value)}
                    className={S.colorInput}
                    tabIndex={hasFocus ? undefined : -1}
                />
            </InputWrapper>
        );
    },
);

ColorInput.displayName = "ColorInput";
