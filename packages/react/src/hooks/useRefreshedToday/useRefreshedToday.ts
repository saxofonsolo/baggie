import { useCallback, useRef } from "react";

const DEFAULT_DATE_IN_PAST = "1900-01-01";

const formatDate8601 = (date: Date) =>
    [
        date.getFullYear(),
        (date.getMonth() + 1).toString().padStart(2, "0"),
        date.getDate().toString().padStart(2, "0"),
    ].join("-");

export function useRefreshedToday() {
    const lastRefreshDate = useRef(DEFAULT_DATE_IN_PAST);

    const resetRefreshDate = useCallback(() => {
        lastRefreshDate.current = DEFAULT_DATE_IN_PAST;
    }, []);

    const updateRefreshDate = useCallback(() => {
        lastRefreshDate.current = formatDate8601(new Date());
    }, []);

    const wasRefreshedToday = useCallback(() => {
        const dateToday = formatDate8601(new Date());
        return dateToday === lastRefreshDate.current;
    }, []);

    return {
        resetRefreshDate,
        updateRefreshDate,
        wasRefreshedToday,
    };
}
