import { deepClone, Override } from "../../../code"
import {
    Direction,
    invertVector,
    isDecimalSub,
    isDecimalSuper,
    isDecimalUnison,
    Vector,
    NumericProperties,
    Rational,
} from "../../../math"
import { computeIrrationalDecimalFromScaledVector } from "../../irrational"
import { ScaledVector } from "./types"

const isScaledVectorSuper = <T extends NumericProperties>(
    candidateSuperScaledVector: ScaledVector<Omit<T, "direction">>,
): candidateSuperScaledVector is ScaledVector<Override<T, "direction", Direction.SUPER>> =>
    isDecimalSuper(computeIrrationalDecimalFromScaledVector(candidateSuperScaledVector))

const isScaledVectorSub = <T extends NumericProperties>(
    candidateSubScaledVector: ScaledVector<Omit<T, "direction">>,
): candidateSubScaledVector is ScaledVector<Override<T, "direction", Direction.SUB>> =>
    isDecimalSub(computeIrrationalDecimalFromScaledVector(candidateSubScaledVector))

const isScaledVectorUnison = <T extends NumericProperties>(
    candidateUnisonScaledVector: ScaledVector<Omit<T, "direction">>,
): candidateUnisonScaledVector is ScaledVector<Override<T, "direction", Direction.UNISON>> =>
    isDecimalUnison(computeIrrationalDecimalFromScaledVector(candidateUnisonScaledVector))

const computeSuperScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<Omit<T, "direction">>,
): ScaledVector<Override<T, "direction", Direction.SUPER>> =>
    isScaledVectorSuper(scaledVector)
        ? (scaledVector as ScaledVector<Override<T, "direction", Direction.SUPER>>)
        : (invertScaledVector(scaledVector) as ScaledVector<Override<T, "direction", Direction.SUPER>>)

const computeSubScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): ScaledVector<Override<T, "direction", Direction.SUB>> =>
    isScaledVectorSub(scaledVector as ScaledVector<Omit<T, "direction">>)
        ? (scaledVector as ScaledVector<Override<T, "direction", Direction.SUB>>)
        : (invertScaledVector(scaledVector as ScaledVector<Omit<T, "direction">>) as ScaledVector<
              Override<T, "direction", Direction.SUB>
          >)

const invertScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<Omit<T, "direction">>,
): ScaledVector<Omit<T, "direction">> => {
    const invertedScaledVector = deepClone(scaledVector)

    invertedScaledVector.vector = invertVector(invertedScaledVector.vector as Vector) as Vector<T & Rational>

    return invertedScaledVector
}

export {
    isScaledVectorSub,
    isScaledVectorSuper,
    isScaledVectorUnison,
    computeSuperScaledVector,
    computeSubScaledVector,
    invertScaledVector,
}
