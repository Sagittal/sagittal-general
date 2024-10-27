import { deepClone } from "../../../code"
import {
    Direction,
    invertVector,
    isDecimalSub,
    isDecimalSuper,
    isDecimalUnison,
    Vector,
    NumericProperties,
} from "../../../math"
import { computeIrrationalDecimalFromScaledVector } from "../../irrational"
import { ScaledVector } from "./types"

const isScaledVectorSuper = <T extends NumericProperties>(
    candidateSuperScaledVector: ScaledVector<T>,
): candidateSuperScaledVector is ScaledVector<T & { direction: Direction.SUPER }> =>
    isDecimalSuper(computeIrrationalDecimalFromScaledVector(candidateSuperScaledVector))

const isScaledVectorSub = <T extends NumericProperties>(
    candidateSubScaledVector: ScaledVector<T>,
): candidateSubScaledVector is ScaledVector<T & { direction: Direction.SUB }> =>
    isDecimalSub(computeIrrationalDecimalFromScaledVector(candidateSubScaledVector))

const isScaledVectorUnison = <T extends NumericProperties>(
    candidateUnisonScaledVector: ScaledVector<T>,
): candidateUnisonScaledVector is ScaledVector<T & { direction: Direction.UNISON }> =>
    isDecimalUnison(computeIrrationalDecimalFromScaledVector(candidateUnisonScaledVector))

const computeSuperScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): ScaledVector<Omit<T, "direction"> & { direction: Direction.SUPER }> =>
    isScaledVectorSuper(scaledVector)
        ? (scaledVector as ScaledVector<Omit<T, "direction"> & { direction: Direction.SUPER }>)
        : (invertScaledVector(scaledVector) as ScaledVector<
              Omit<T, "direction"> & { direction: Direction.SUPER }
          >)

const computeSubScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): ScaledVector<Omit<T, "direction"> & { direction: Direction.SUB }> =>
    isScaledVectorSub(scaledVector)
        ? (scaledVector as ScaledVector<Omit<T, "direction"> & { direction: Direction.SUB }>)
        : (invertScaledVector(scaledVector) as ScaledVector<
              Omit<T, "direction"> & { direction: Direction.SUB }
          >)

const invertScaledVector = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): ScaledVector<Omit<T, "direction">> => {
    const invertedScaledVector = deepClone(scaledVector)

    invertedScaledVector.vector = invertVector(invertedScaledVector.vector) as Vector<T & { rational: true }>

    return invertedScaledVector as ScaledVector<Omit<T, "direction">>
}

export {
    isScaledVectorSub,
    isScaledVectorSuper,
    isScaledVectorUnison,
    computeSuperScaledVector,
    computeSubScaledVector,
    invertScaledVector,
}
