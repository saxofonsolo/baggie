/* Interfaces */
export type { Bounds } from "./coordinates/_interfaces/bounds.interface";
export type { CoordinatesLatLng } from "./coordinates/_interfaces/coordinatesLatLng.interface";
export type { CoordinatesXY } from "./coordinates/_interfaces/coordinatesXY.interface";

/* Arithmetic */
export { addNumbers } from "./arithmetic/addNumbers/addNumbers";
export { countDecimals } from "./arithmetic/countDecimals/countDecimals";
export { sortByClosest } from "./arithmetic/sortByClosest/sortByClosest";

/* Average */
export { getAntiMode } from "./average/getAntiMode/getAntiMode";
export { getFrequency } from "./average/getFrequency/getFrequency";
export { getMean } from "./average/getMean/getMean";
export { getMedian } from "./average/getMedian/getMedian";
export { getMode } from "./average/getMode/getMode";

/* Coordinates */
export { convertToCoordinates } from "./coordinates/convertToCoordinates";

/* Coordinates - Angle */
export { getAngle } from "./coordinates/angle/getAngle";

/* Coordinates - Bounds */
export { getBounds } from "./coordinates/bounds/getBounds";

/* Coordinates - Distance */
export { getAllDistances } from "./coordinates/distance/getAllDistances";
export { getDistance } from "./coordinates/distance/getDistance";
export { getDistanceOnEarth } from "./coordinates/distance/getDistanceOnEarth";
export { getDistanceOnSphere } from "./coordinates/distance/getDistanceOnSphere";
export { getPointBetween } from "./coordinates/distance/getPointBetween";

/* Coordinates - Radius */
export { isInsideRadius } from "./coordinates/radius/isInsideRadius";
export { keepInsideRadius } from "./coordinates/radius/keepInsideRadius";

/* Coordinates - Slope */
export { getSlope } from "./coordinates/slope/getSlope";

/* Geometry - Angle */
export { isAngleInRange } from "./geometry/angle/isAngleInRange";
export { sortByClosestAngle } from "./geometry/angle/sortByClosestAngle";

/* Geometry - Circle */
export { getCircleArea } from "./geometry/circle/getCircleArea/getCircleArea";
export { getCircleCircumference } from "./geometry/circle/getCircleCircumference/getCircleCircumference";
export { getPointsOnCircle } from "./geometry/circle/getPointsOnCircle/getPointsOnCircle";

/* Geometry - Cone */
export { getConeArea } from "./geometry/cone/getConeArea";
export { getConeVolume } from "./geometry/cone/getConeVolume";

/* Geometry - Cuboid */
export { getCuboidArea } from "./geometry/cuboid/getCuboidArea";
export { getCuboidVolume } from "./geometry/cuboid/getCuboidVolume";

/* Geometry - Cylinder */
export { getCylinderArea } from "./geometry/cylinder/getCylinderArea";
export { getCylinderVolume } from "./geometry/cylinder/getCylinderVolume";

/* Geometry - Rectangle */
export { getRectanglePerimeter } from "./geometry/rectangle/getRectanglePerimeter/getRectanglePerimeter";
export { getRectangleArea } from "./geometry/rectangle/getRectangleArea/getRectangleArea";

/* Geometry - Sphere */
export { getSphereArea } from "./geometry/sphere/getSphereArea";
export { getSphereVolume } from "./geometry/sphere/getSphereVolume";

/* Geometry - Triangle */
export { getTrianglePerimeter } from "./geometry/triangle/getTrianglePerimeter";
export { getTriangleArea } from "./geometry/triangle/getTriangleArea";

/* Helpers */
export { zeroIfNotNumber } from "./helpers/zeroIfNotNumber/zeroIfNotNumber";

/* Percentage */
export { getPercentage } from "./percentage/getPercentage/getPercentage";
export { getPercentageBetween } from "./percentage/getPercentageBetween/getPercentageBetween";
export { getPercentageIncrease } from "./percentage/getPercentageIncrease/getPercentageIncrease";
export { getPositionBetween } from "./percentage/getPositionBetween/getPositionBetween";

/* Radians */
export { degreesToRadians } from "./radians/degreesToRadians";
export { radiansToDegrees } from "./radians/radiansToDegrees";

/* Range */
export { clamp } from "./range/clamp/clamp";
export { convertRangePosition } from "./range/convertRangePosition/convertRangePosition";
export { getRange } from "./range/getRange/getRange";
export { isInRange } from "./range/isInRange";
export { keepOutsideRange } from "./range/keepOutsideRange";

/* Rounding */
export { ceilDecimals } from "./rounding/ceilDecimals/ceilDecimals";
export { ceilToMultipleOf } from "./rounding/ceilToMultipleOf/ceilToMultipleOf";
export { floorDecimals } from "./rounding/floorDecimals/floorDecimals";
export { floorToMultipleOf } from "./rounding/floorToMultipleOf/floorToMultipleOf";
export { roundDecimals } from "./rounding/roundDecimals/roundDecimals";
export { roundToMultipleOf } from "./rounding/roundToMultipleOf/roundToMultipleOf";
export { truncDecimals } from "./rounding/truncDecimals/truncDecimals";
export { isNumberRound } from "./rounding/isNumberRound/isNumberRound";

/* Temperature */
export { celsiusToDelisle } from "./temperature/celsiusToDelisle/celsiusToDelisle";
export { celsiusToFahrenheit } from "./temperature/celsiusToFahrenheit/celsiusToFahrenheit";
export { celsiusToKelvin } from "./temperature/celsiusToKelvin/celsiusToKelvin";
export { celsiusToNewton } from "./temperature/celsiusToNewton/celsiusToNewton";
export { celsiusToRankine } from "./temperature/celsiusToRankine/celsiusToRankine";
export { celsiusToReaumur } from "./temperature/celsiusToReaumur/celsiusToReaumur";
export { celsiusToRoemer } from "./temperature/celsiusToRoemer/celsiusToRoemer";
export { delisleToCelsius } from "./temperature/delisleToCelsius/delisleToCelsius";
export { fahrenheitToCelsius } from "./temperature/fahrenheitToCelsius/fahrenheitToCelsius";
export { kelvinToCelsius } from "./temperature/kelvinToCelsius/kelvinToCelsius";
export { newtonToCelsius } from "./temperature/newtonToCelsius/newtonToCelsius";
export { rankineToCelsius } from "./temperature/rankineToCelsius/rankineToCelsius";
export { reaumurToCelsius } from "./temperature/reaumurToCelsius/reaumurToCelsius";
export { roemerToCelsius } from "./temperature/roemerToCelsius/roemerToCelsius";

/* Time */
export { getDuration } from "./time/getDuration/getDuration";
export { getTimeDifference } from "./time/getTimeDifference/getTimeDifference";
