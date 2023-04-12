type Insertion =
    | Omit<any, "function">
    | ((args: { previous: any; next: any; index: number }) => any);

/**
 * Insert new values between all values in an array.
 */
export const intersperse = (array: any[], ...insertion: Insertion[]): any[] =>
    array.reduce((accumulator: any[], element, index, array) => {
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
