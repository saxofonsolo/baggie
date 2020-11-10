import { fahrenheitToCelsius } from "./fahrenheitToCelsius";

export const rankineToCelsius = (rankine: number): number =>
    fahrenheitToCelsius(rankine - 459.67);
