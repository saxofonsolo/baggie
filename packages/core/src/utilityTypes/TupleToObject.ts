/**
 * Convert tuple to object.
 */
export type TupleToObject<
    T extends readonly any[],
    M extends Record<Exclude<keyof T, keyof any[]>, PropertyKey>,
> = { [TKey in Exclude<keyof T, keyof any[]> as M[TKey]]: T[TKey] };
