/**
 * Extract the shared properties from two types or interfaces.
 */
export type SharedProperties<A, B> = Pick<
    A,
    {
        [K in keyof A & keyof B]: A[K] extends B[K]
            ? B[K] extends A[K]
                ? K
                : never
            : never;
    }[keyof A & keyof B]
>;
