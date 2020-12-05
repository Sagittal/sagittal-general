import {DEGREES_TO_RADIANS, RADIANS_TO_DEGREES} from "./constants"
import {subtract} from "./typedOperations"
import {Coordinates, Degrees, Radians} from "./types"

const computeAngle = ([originX, originY]: Coordinates, [pointX, pointY]: Coordinates): Radians => {
    const rise = subtract(pointY, originY)
    const run = subtract(pointX, originX)
    const slope = rise / run

    return Math.atan(slope) as Radians
}

const radiansToDegrees = (radians: Radians): Degrees =>
    radians * RADIANS_TO_DEGREES as Degrees

const degreesToRadians = (degrees: Degrees): Radians =>
    degrees * DEGREES_TO_RADIANS as Radians

export {
    computeAngle,
    radiansToDegrees,
    degreesToRadians,
}
