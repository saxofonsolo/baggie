/**
 * Calculate how much a substance has decayed given it's half life
 * and the time passed.
 */
export const getHalfLifeDecay = (
    initialValue: number,
    timePassed: number,
    halfLife: number,
) => initialValue * 0.5 ** (timePassed / halfLife);
