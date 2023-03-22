import React from "react";

interface PropsWithLabel {
    label: React.ReactNode;
    labelForId: string | undefined;
}

interface PropsWithoutLabel {
    label?: never;
    labelForId?: string;
}

interface PropsEssentials {
    children: NonNullable<React.ReactNode>;
    helperText?: React.ReactNode;
    labelRight?: React.ReactNode;
    invalid?: boolean;
}

export type InputWrapperProps = PropsEssentials &
    (PropsWithLabel | PropsWithoutLabel);
