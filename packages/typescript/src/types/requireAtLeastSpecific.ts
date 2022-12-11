/**
 * Require at least one specific property of an interface.
 */
export type RequireAtLeastSpecific<T, K extends keyof T> = Partial<T> &
    Pick<T, K>;
