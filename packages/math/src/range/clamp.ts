export const clamp = (input: number, min: number, max: number): number =>
    Math.min(max, Math.max(min, input));
