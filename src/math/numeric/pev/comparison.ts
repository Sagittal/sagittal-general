import {computeTrimmedArray, deepEquals, MAX_JS_PRECISION, Precision} from "../../../code"
import {Pev} from "./types"

const arePevsEqual = (pevA: Pev, pevB: Pev, precision: Precision = MAX_JS_PRECISION): boolean =>
    deepEquals(computeTrimmedArray(pevA), computeTrimmedArray(pevB), precision)

export {
    arePevsEqual,
}
