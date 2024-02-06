import { useCallback, useEffect, useState } from "react";

export function useKeyboardHeight(customProperty: boolean | string = false) {
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    const onResizeVisualViewport = useCallback(() => {
        const newHeight =
            window.innerHeight -
            (window.visualViewport?.height || window.innerHeight);

        setKeyboardHeight(newHeight);
        if (customProperty) {
            document.documentElement.style.setProperty(
                (typeof customProperty === "string"
                    ? customProperty
                    : "keyboard-height"
                ).replace(/^-{0,2}/, "--"),
                `${newHeight}px`,
            );
        }
    }, [customProperty]);

    useEffect(() => {
        window.visualViewport?.addEventListener(
            "resize",
            onResizeVisualViewport,
        );

        return () =>
            window.visualViewport?.removeEventListener(
                "resize",
                onResizeVisualViewport,
            );
    }, [onResizeVisualViewport]);

    return keyboardHeight;
}
