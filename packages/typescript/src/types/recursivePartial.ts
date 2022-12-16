/* eslint-disable */
/**
 * Make all properties of a type optional - recursively.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { RecursivePartial } from "@baggie/typescript";
 *
 * interface Styles {
 *     fontSizes: {
 *         small: number;
 *         large: number;
 *     };
 *     lineHeight: number;
 * }
 *
 * type OptionalStyles = RecursivePartial<Styles>;
 *
 * // OptionalStyles is the same as ...
 * interface Styles {
 *     fontSizes?: {
 *         small?: number;
 *         large?: number;
 *     };
 *     lineHeight?: number;
 * }
 */
export type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
        ? RecursivePartial<U>[]
        : T[P] extends object
        ? RecursivePartial<T[P]>
        : T[P];
};
