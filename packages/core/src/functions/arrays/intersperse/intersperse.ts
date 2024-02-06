/**
 * Insert new values between all existing values in an array.
 */
export function intersperse<A, I>(
    array: A[],
    ...insertion: (I extends () => any
        ? (args: { previous: A; next: A; index: number }) => any
        : any)[]
): (A | (I extends () => any ? ReturnType<I> : I))[] {
    return array.reduce((accumulator: any[], element, index, array) => {
        accumulator.push(element);
        if (index < array.length - 1) {
            insertion.forEach((insert, insertIndex) =>
                accumulator.push(
                    typeof insert === "function"
                        ? insert({
                              previous: array[index],
                              next: array[index + 1],
                              index: insertIndex,
                          })
                        : insert,
                ),
            );
        }
        return accumulator;
    }, []);
}
