import { deepClone } from "../../../code"
import {
    invertVector,
    isDecimalSub,
    isDecimalSuper,
    isDecimalUnison,
    Vector,
    NumericProperties,
    Rational,
    Sub,
    Super,
    Unison,
} from "../../../math"
import { computeIrrationalDecimalFromScaledVector } from "../../irrational"
import { AnyDirection } from "../types"
import { ScaledVector } from "./types"

const isScaledVectorSuper = <T extends NumericProperties>(
    candidateSuperScaledVector: ScaledVector<T>,
): candidateSuperScaledVector is ScaledVector<T & Super> =>
    isDecimalSuper(computeIrrationalDecimalFromScaledVector(candidateSuperScaledVector))

const isScaledVectorSub = <T extends NumericProperties>(
    candidateSubScaledVector: ScaledVector<T>,
): candidateSubScaledVector is ScaledVector<T & Sub> =>
    isDecimalSub(computeIrrationalDecimalFromScaledVector(candidateSubScaledVector))

const isScaledVectorUnison = <T extends NumericProperties>(
    candidateUnisonScaledVector: ScaledVector<T>,
): candidateUnisonScaledVector is ScaledVector<T & Unison> =>
    isDecimalUnison(computeIrrationalDecimalFromScaledVector(candidateUnisonScaledVector))

const computeSuperScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): ScaledVector<T & Super> =>
    isScaledVectorSuper(scaledVector) ? scaledVector : invertScaledVector(scaledVector)

const computeSubScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): ScaledVector<T & Sub> =>
    isScaledVectorSub(scaledVector) ? scaledVector : invertScaledVector(scaledVector)

const invertScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): ScaledVector<T & AnyDirection> => {
    const invertedScaledVector = deepClone(scaledVector)

    invertedScaledVector.vector = invertVector(invertedScaledVector.vector) as Vector<T & Rational>

    return invertedScaledVector as ScaledVector<T & AnyDirection>
}

export {
    isScaledVectorSub,
    isScaledVectorSuper,
    isScaledVectorUnison,
    computeSuperScaledVector,
    computeSubScaledVector,
    invertScaledVector,
}
