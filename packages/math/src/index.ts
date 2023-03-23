/* Interfaces */
export type { Bounds } from "./coordinates/_interfaces/bounds.interface";
export type { CoordinatesLatLng } from "./coordinates/_interfaces/coordinatesLatLng.interface";
export type { CoordinatesXY } from "./coordinates/_interfaces/coordinatesXY.interface";

/* Arithmetic */
export { addNumbers } from "./arithmetic/addNumbers/addNumbers";
export { countDecimals } from "./arithmetic/countDecimals/countDecimals";
export { getClosest } from "./arithmetic/getClosest/getClosest";

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
export { getClosestAngles } from "./coordinates/angle/getClosestAngles";
export { isAngleInRange } from "./coordinates/angle/isAngleInRange";

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

/* Geometry - Circle */
export { getCircleCircumference } from "./geometry/circle/getCircleCircumference";
export { getCircleSurface } from "./geometry/circle/getCircleSurface";
export { getPointsOnCircle } from "./geometry/circle/getPointsOnCircle";

/* Geometry - Cone */
export { getConeSurface } from "./geometry/cone/getConeSurface";
export { getConeVolume } from "./geometry/cone/getConeVolume";

/* Geometry - Cuboid */
export { getCuboidSurface } from "./geometry/cuboid/getCuboidSurface";
export { getCuboidVolume } from "./geometry/cuboid/getCuboidVolume";

/* Geometry - Cylinder */
export { getCylinderSurface } from "./geometry/cylinder/getCylinderSurface";
export { getCylinderVolume } from "./geometry/cylinder/getCylinderVolume";

/* Geometry - Rectangle */
export { getRectanglePerimeter } from "./geometry/rectangle/getRectanglePerimeter";
export { getRectangleSurface } from "./geometry/rectangle/getRectangleSurface";

/* Geometry - Sphere */
export { getSphereSurface } from "./geometry/sphere/getSphereSurface";
export { getSphereVolume } from "./geometry/sphere/getSphereVolume";

/* Geometry - Triangle */
export { getTrianglePerimeter } from "./geometry/triangle/getTrianglePerimeter";
export { getTriangleSurface } from "./geometry/triangle/getTriangleSurface";

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
export { clamp } from "./range/clamp";
export { convertRangePosition } from "./range/convertRangePosition";
export { getRange } from "./range/getRange";
export { isInRange } from "./range/isInRange";
export { keepOutsideRange } from "./range/keepOutsideRange";

/* Rounding */
export { ceilDecimals } from "./rounding/ceilDecimals";
export { ceilToMultipleOf } from "./rounding/ceilToMultipleOf";
export { floorDecimals } from "./rounding/floorDecimals";
export { floorToMultipleOf } from "./rounding/floorToMultipleOf";
export { roundDecimals } from "./rounding/roundDecimals";
export { roundToMultipleOf } from "./rounding/roundToMultipleOf";
export { truncDecimals } from "./rounding/truncDecimals";
export { isNumberRound } from "./rounding/isNumberRound";
export { truncNumber } from "./rounding/truncNumber";

/* Temperature */
export { celsiusToDelisle } from "./temperature/celsiusToDelisle";
export { celsiusToFahrenheit } from "./temperature/celsiusToFahrenheit";
export { celsiusToKelvin } from "./temperature/celsiusToKelvin";
export { celsiusToNewton } from "./temperature/celsiusToNewton";
export { celsiusToRankine } from "./temperature/celsiusToRankine";
export { celsiusToReaumur } from "./temperature/celsiusToReaumur";
export { celsiusToRoemer } from "./temperature/celsiusToRoemer";
export { delisleToCelsius } from "./temperature/delisleToCelsius";
export { fahrenheitToCelsius } from "./temperature/fahrenheitToCelsius";
export { kelvinToCelsius } from "./temperature/kelvinToCelsius";
export { newtonToCelsius } from "./temperature/newtonToCelsius";
export { rankineToCelsius } from "./temperature/rankineToCelsius";
export { reaumurToCelsius } from "./temperature/reaumurToCelsius";
export { roemerToCelsius } from "./temperature/roemerToCelsius";

/* Time */
export { getDuration } from "./time/getDuration";
export { getTimeDifference } from "./time/getTimeDifference";
