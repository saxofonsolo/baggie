/**
 * Rename properties in interfaces and types.
 */
export type RenameProperties<
    T,
    R extends {
        [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T";
    },
> = Omit<T, keyof R> &
    UnionToIntersection<
        {
            [P in keyof R & keyof T]: undefined extends T[P]
                ? { [PP in R[P]]?: T[P] }
                : { [PP in R[P]]: T[P] };
        }[keyof R & keyof T]
    >;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I,
) => void
    ? I
    : never;
