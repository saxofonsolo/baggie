import { celsiusToFahrenheit } from "./celsiusToFahrenheit";

export const celsiusToRankine = (celsius: number): number =>
    celsiusToFahrenheit(celsius) + 459.67;
