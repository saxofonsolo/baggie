/**
 * Add an array of numbers together.
 */
export function addNumbers(numbers: number[]): number {
    return [...numbers].reduce((a: number, b: number) => a + b, 0);
}
