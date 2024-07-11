import { useCallback, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";

interface Options<T> {
    defaultValue?: T;
    history?: "push" | "replace";
}

export type QueryMapperParams = [key: string, value: string][];

export function useQueryMapper<T>(
    valueToParams: (value: T, defaultValue?: T) => QueryMapperParams,
    paramsToValue: (params: QueryMapperParams, defaultValue?: T) => T,
    options?: Options<T>,
): [T, (value: T | ((prev: T) => T)) => void] {
    const [searchParams, setSearchParams] = useSearchParams(
        options?.defaultValue
            ? valueToParams(options.defaultValue, options.defaultValue)
            : undefined,
    );

    const state = useMemo(() => {
        const entries = Array.from(searchParams.entries());
        return paramsToValue(entries, options?.defaultValue);
    }, [options, paramsToValue, searchParams]);

    const stateForComparison = useRef<T>(state);
    const paramsForComparison = useRef(Array.from(searchParams.entries()));
    const applyDefaultValues = useRef(!searchParams.size);

    const setParams = useCallback(
        (newParams: QueryMapperParams) => {
            setSearchParams(
                (prev) => {
                    const params = Object.fromEntries(prev);
                    newParams.forEach((newParam) => {
                        const [key, value] = newParam;
                        if (value === null) delete params[key];
                        else params[key] = value;
                    });
                    return Object.entries(params);
                },
                {
                    replace: options?.history !== "push",
                    preventScrollReset: true,
                },
            );
        },
        [options?.history, setSearchParams],
    );

    const setState = useCallback(
        (value: T | ((prev: T) => T)) => {
            const newValue =
                typeof value === "function"
                    ? (value as (prev: T) => T)(stateForComparison.current)
                    : value;
            const newParams = valueToParams(newValue, options?.defaultValue);

            // Check if params have changed
            const haveParamsChanged =
                newParams.length !== paramsForComparison.current.length ||
                !paramsForComparison.current.every(([keyA, valueA]) =>
                    newParams.find(
                        ([keyB, valueB]) => keyB === keyA && valueA === valueB,
                    ),
                );

            // Only update if params have changed
            if (haveParamsChanged) {
                setParams(newParams);
                paramsForComparison.current = newParams;
                stateForComparison.current = newValue;
            }
        },
        [options, setParams, valueToParams],
    );

    useEffect(() => {
        if (applyDefaultValues.current && options?.defaultValue) {
            setState(options.defaultValue);
        }
        applyDefaultValues.current = false;
    }, [options, setState]);

    return [state, setState];
}
