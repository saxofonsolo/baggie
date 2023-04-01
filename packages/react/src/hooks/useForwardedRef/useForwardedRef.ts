import React, { useEffect, useRef } from "react";

export const useForwardedRef = <T>(
    forwardedRef: React.ForwardedRef<T>,
    initialValue: any = null,
): React.RefObject<T> => {
    const innerRef = useRef<T>(initialValue);

    useEffect(() => {
        if (!forwardedRef) {
            return;
        }
        if (typeof forwardedRef === "function") {
            forwardedRef(innerRef.current);
            return;
        } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            forwardedRef.current = innerRef.current;
        }
    });

    return innerRef;
};
