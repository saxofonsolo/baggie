import React from "react";
import { InputWrapperProps } from "./InputWrapper.props";
import S from "./InputWrapper.module.scss";

export const InputWrapper = (props: InputWrapperProps) => (
    <div className={S.wrapper}>
        {(props.label || props.labelRight) && (
            <div className={S.header}>
                {props.label && (
                    <label htmlFor={props.labelForId} className={S.label}>
                        {props.label}
                    </label>
                )}
                {props.labelRight && (
                    <div className={S.labelRight}>{props.labelRight}</div>
                )}
            </div>
        )}

        <div className={S.inputWrapper}>{props.children}</div>

        {props.helperText && (
            <div
                className={[S.helperText, props.invalid && S.invalid].join(" ")}
            >
                {props.helperText}
            </div>
        )}
    </div>
);
