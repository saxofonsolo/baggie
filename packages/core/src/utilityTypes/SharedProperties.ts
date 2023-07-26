/**
 * Extract the shared properties from two types or interfaces.
 */
export type SharedProperties<A, B> = Pick<
    A,
    {
        [TKey in keyof A & keyof B]: A[TKey] extends B[TKey]
            ? B[TKey] extends A[TKey]
                ? TKey
                : never
            : never;
    }[keyof A & keyof B]
>;
