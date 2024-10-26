import {computeIrrationalScaledVectorFromVector} from "../../irrational"
import {computeRationalScaledVectorFromRationalVector, isVectorRational} from "../../rational"
import {Vector} from "../vector"
import {NumericProperties} from "../types"
import {ScaledVector} from "./types"

const computeScaledVectorFromVector = <T extends NumericProperties>(vector: Vector<T>): ScaledVector<T> =>
    isVectorRational(vector) ?
        computeRationalScaledVectorFromRationalVector(vector) :
        computeIrrationalScaledVectorFromVector(vector)

export {
    computeScaledVectorFromVector,
}
