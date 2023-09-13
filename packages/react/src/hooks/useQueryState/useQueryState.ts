import { useCallback, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";

interface Options {
    toggle?: boolean;
    history?: "push" | "replace";
}
interface SetterOptions {
    toggle?: boolean;
}

type ParamType = string | null;
type ReturnType = [
    ParamType,
    (
        value: ParamType | ((prev: ParamType) => ParamType),
        options?: SetterOptions,
    ) => void,
];

function useQueryState(key: string): ReturnType;
function useQueryState(key: string, options: Options): ReturnType;
function useQueryState(key: string, defaultValue: ParamType): ReturnType;
function useQueryState(
    key: string,
    defaultValue: ParamType,
    options: Options,
): ReturnType;
function useQueryState(
    key: string,
    defaultValue?: ParamType | Options,
    options?: Options,
) {
    const [searchParams, setSearchParams] = useSearchParams();

    const state = useMemo(() => searchParams.get(key), [key, searchParams]);
    const stateRef = useRef<ParamType>(state);
    const isInitialRun = useRef(true);

    const opts = useMemo(
        () =>
            (typeof defaultValue === "object" ? defaultValue : options) ||
            undefined,
        [defaultValue, options],
    );

    const setParams = useCallback(
        (value: ParamType) => {
            setSearchParams(
                (sp) => {
                    if (value === null) {
                        sp.delete(key);
                    } else {
                        sp.set(key, value);
                    }
                    return sp;
                },
                {
                    replace: opts?.history !== "push",
                    preventScrollReset: true,
                },
            );
        },
        [key, opts?.history, setSearchParams],
    );

    const setState = useCallback(
        (
            value: ParamType | ((prev: ParamType) => ParamType),
            options?: SetterOptions,
        ) => {
            const toggle =
                typeof options?.toggle === "boolean"
                    ? options.toggle
                    : opts?.toggle || false;
            const actualValue =
                typeof value === "function"
                    ? (value as (prev: ParamType) => ParamType)(
                          stateRef.current,
                      )
                    : value;
            const newValue =
                toggle && actualValue === stateRef.current ? null : actualValue;
            setParams(newValue);
            stateRef.current = newValue;
        },
        [opts?.toggle, setParams],
    );

    useEffect(() => {
        const defVal = typeof defaultValue === "string" ? defaultValue : null;
        if (
            isInitialRun.current &&
            defVal !== null &&
            stateRef.current === null
        ) {
            setState(defVal);
        }
        isInitialRun.current = false;
    }, [defaultValue, setState]);

    return [state, setState];
}

export { useQueryState };
