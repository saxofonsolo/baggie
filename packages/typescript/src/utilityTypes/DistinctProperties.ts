/**
 * Extract the distinct properties from a type or interface by comparing it to another.
 */
export type DistinctProperties<A, B> = Omit<
    A,
    {
        [K in keyof A & keyof B]: A[K] extends B[K]
            ? B[K] extends A[K]
                ? K
                : never
            : never;
    }[keyof A & keyof B]
>;
