/**
 * Calculate how much a substance has decayed given it's half life
 * and the time passed.
 */
export function getHalfLifeDecay(
    initialValue: number,
    timePassed: number,
    halfLife: number,
) {
    return initialValue * 0.5 ** (timePassed / halfLife);
}
