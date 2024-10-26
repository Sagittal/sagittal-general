import {computeTrimmedArray, deepEquals, MAX_JS_PRECISION, Precision} from "../../../code"
import {Vector} from "./types"

const areVectorsEqual = (vectorA: Vector, vectorB: Vector, precision: Precision = MAX_JS_PRECISION): boolean =>
    deepEquals(computeTrimmedArray(vectorA), computeTrimmedArray(vectorB), precision)

export {
    areVectorsEqual,
}
