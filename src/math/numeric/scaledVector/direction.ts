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

const computeSuperScaledVector: {
    <T extends NumericProperties>(
        scaledVector: ScaledVector<T & { direction: Direction.UNISON }>,
    ): ScaledVector<Omit<T, "direction"> & { direction: Direction.UNISON }>
    <T extends NumericProperties>(scaledVector: ScaledVector<T>): ScaledVector<
        Omit<T, "direction"> & { direction: Direction.SUPER; integer: false }
    >
} = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): ScaledVector<Omit<T, "direction"> & { direction: Direction.SUPER & Direction.UNISON }> =>
    // @ts-ignore
    isScaledVectorSuper(scaledVector)
        ? (scaledVector as ScaledVector<Omit<T, "direction">>)
        : (invertScaledVector(scaledVector) as ScaledVector<Omit<T, "direction">>)

const computeSubScaledVector: {
    <T extends NumericProperties>(
        scaledVector: ScaledVector<T & { direction: Direction.UNISON }>,
    ): ScaledVector<Omit<T, "direction"> & { direction: Direction.UNISON }>
    <T extends NumericProperties>(scaledVector: ScaledVector<T>): ScaledVector<
        Omit<T, "direction"> & { direction: Direction.SUB; integer: false }
    >
} = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): ScaledVector<Omit<T, "direction"> & { direction: Direction.SUB & Direction.UNISON }> =>
    // @ts-ignore
    isScaledVectorSub(scaledVector)
        ? (scaledVector as ScaledVector<Omit<T, "direction">>)
        : (invertScaledVector(scaledVector) as ScaledVector<Omit<T, "direction">>)

const invertScaledVector: {
    <T extends NumericProperties>(
        scaledVector: ScaledVector<T & { direction: Direction.SUPER }>,
    ): ScaledVector<Omit<T, "direction"> & { direction: Direction.SUB; integer: false }>
    <T extends NumericProperties>(scaledVector: ScaledVector<T & { direction: Direction.SUB }>): ScaledVector<
        Omit<T, "direction"> & { direction: Direction.SUPER; integer: false }
    >
    <T extends NumericProperties>(
        scaledVector: ScaledVector<T & { direction: Direction.UNISON }>,
    ): ScaledVector<Omit<T, "direction"> & { direction: Direction.UNISON }>
    <T extends NumericProperties>(scaledVector: ScaledVector<T>): ScaledVector<
        Omit<T, "direction"> & { integer: false }
    >
} = <T extends NumericProperties>(
    scaledVector: ScaledVector<T>,
): ScaledVector<Omit<T, "direction"> & { direction: Direction.SUPER & Direction.SUB & Direction.UNISON }> => {
    const invertedScaledVector = deepClone(scaledVector)

    invertedScaledVector.vector = invertVector(invertedScaledVector.vector) as Vector<T & { rational: true }>

    // @ts-ignore
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
