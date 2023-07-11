/**
 * Replace one type with another - recursively.
 */
export type ReplaceType<T, F, R> = T extends F
    ? R
    : T extends object
    ? { [K in keyof T]: ReplaceType<T[K], F, R> }
    : T;
