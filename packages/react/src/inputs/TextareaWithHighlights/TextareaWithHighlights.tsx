import React, {
    CSSProperties,
    forwardRef,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { useForwardedRef } from "../../hooks/useForwardedRef/useForwardedRef";
import { useValueWithHighlights } from "./hooks/useValueWithHighlights";
import { TextareaWithHighlightsProps } from "./TextareaWithHighlights.props";
import S from "./TextareaWithHighlights.module.scss";

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

export const TextareaWithHighlights = forwardRef<
    HTMLTextAreaElement,
    TextareaWithHighlightsProps
>(({ highlights, onChange, onScroll, ...props }, ref) => {
    const [value, setValue] = useState(
        String(props.value || props.defaultValue || ""),
    );
    const [style, setStyle] = useState<CSSProperties>();
    const highlightAreaRef = useRef<HTMLDivElement>(null);
    const textareaRef = useForwardedRef(ref);

    const valueWithHighlights = useValueWithHighlights(value, highlights);

    const handleChange = useCallback(
        (event: ChangeEvent) => {
            setValue(event.target.value);
            if (onChange) {
                onChange(event);
            }
        },
        [onChange],
    );

    const handleScroll = useCallback(
        (event: React.UIEvent<HTMLTextAreaElement, UIEvent>) => {
            if (highlightAreaRef?.current) {
                const target = event.target as HTMLTextAreaElement;
                highlightAreaRef.current.scrollLeft = target.scrollLeft;
                highlightAreaRef.current.scrollTop = target.scrollTop;
            }

            if (onScroll) {
                onScroll(event);
            }
        },
        [onScroll],
    );

    const copySize = useCallback((entry: ResizeObserverEntry) => {
        if (highlightAreaRef?.current && entry) {
            const width = entry.borderBoxSize[0].inlineSize;
            const height = entry.borderBoxSize[0].blockSize;
            highlightAreaRef.current.style.width = `${width}px`;
            highlightAreaRef.current.style.height = `${height}px`;
        }
    }, []);

    const copyStyle = useCallback(() => {
        const computedStyle = window.getComputedStyle(
            textareaRef.current as HTMLTextAreaElement,
        );
        const filteredStyles = {
            font: computedStyle.getPropertyValue("font"),
            letterSpacing: computedStyle.getPropertyValue("letter-spacing"),
            whiteSpace: computedStyle.getPropertyValue("white-space"),
            padding: computedStyle.getPropertyValue("padding"),
            border: computedStyle.getPropertyValue("border"),
            wordWrap: computedStyle.getPropertyValue("word-wrap"),
            verticalAlign: computedStyle.getPropertyValue("vertical-align"),
            textIndent: computedStyle.getPropertyValue("text-indent"),
        };
        setStyle(filteredStyles as CSSProperties);
    }, [textareaRef]);

    useEffect(() => {
        if (textareaRef.current) {
            copyStyle();

            const resizeObserver = new ResizeObserver((entries) =>
                copySize(entries[0]),
            );
            resizeObserver.observe(textareaRef.current);

            return () => {
                resizeObserver.disconnect();
            };
        }
    }, [textareaRef, copySize, copyStyle]);

    return (
        <>
            <span
                ref={highlightAreaRef}
                style={{
                    ...props.style,
                    ...style,
                    backgroundColor: props.style?.backgroundColor || "#fff",
                    background: props.style?.background,
                }}
                className={S.highlightArea}
                aria-hidden={true}
            >
                {valueWithHighlights}
            </span>
            <textarea
                ref={textareaRef}
                onChange={handleChange}
                onScroll={handleScroll}
                {...props}
                style={{
                    ...props.style,
                    background: "transparent",
                    position: "relative",
                    zIndex: 1,
                }}
            />
        </>
    );
});

TextareaWithHighlights.displayName = "TextareaWithHighlights";
