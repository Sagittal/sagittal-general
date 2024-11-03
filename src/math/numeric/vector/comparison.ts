import { computeTrimmedArray, deepEquals, MAX_JS_PRECISION, Precision } from "../../../code"
import { NumericProperties } from "../types"
import { Vector } from "./types"

const areVectorsEqual = <T extends NumericProperties, U extends NumericProperties>(
    vectorA: Vector<T>,
    vectorB: Vector<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean => deepEquals(computeTrimmedArray(vectorA), computeTrimmedArray(vectorB), precision)

export { areVectorsEqual }
