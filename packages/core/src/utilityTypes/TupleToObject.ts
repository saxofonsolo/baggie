export type TupleToObject<
    T extends readonly any[],
    M extends Record<Exclude<keyof T, keyof any[]>, PropertyKey>,
> = { [K in Exclude<keyof T, keyof any[]> as M[K]]: T[K] };
