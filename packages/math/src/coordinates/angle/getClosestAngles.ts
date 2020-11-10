import { NonEmptyArray } from "@baggie/typescript";

export const getClosestAngles = (
    target: number,
    angles: NonEmptyArray<number>
): number[] =>
    [...angles].sort((a, b) => {
        const aRawDiff = a > target ? a - target : target - a;
        const aModulusDiff = aRawDiff % 360;
        const aDistance =
            aModulusDiff > 180 ? 360 - aModulusDiff : aModulusDiff;

        const bRawDiff = b > target ? b - target : target - b;
        const bModulusDiff = bRawDiff % 360;
        const bDistance =
            bModulusDiff > 180 ? 360 - bModulusDiff : bModulusDiff;

        return aDistance < bDistance ? -1 : aDistance > bDistance ? 1 : 0;
    });
