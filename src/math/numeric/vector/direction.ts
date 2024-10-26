import { Count } from "../../../types"
import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Prime } from "../../rational"
import { computeDecimalFromVector } from "../decimal"
import { Direction, NumericProperties } from "../types"
import { Vector } from "./types"

const isVectorSub = <T extends NumericProperties>(
    candidateSubVector: Vector<Omit<T, "direction">>,
): candidateSubVector is Vector<Omit<T, "direction"> & { direction: Direction.SUB }> => {
    if (
        candidateSubVector.length &&
        candidateSubVector.every((primeCount: Count<Prime>): boolean => primeCount >= 0)
    ) {
        return false
    }
    if (
        candidateSubVector.length &&
        candidateSubVector.every((primeCount: Count<Prime>): boolean => primeCount <= 0)
    ) {
        return true
    }

    return computeDecimalFromVector(candidateSubVector) < MULTIPLICATIVE_IDENTITY
}

const isVectorSuper = <T extends NumericProperties>(
    candidateSuperVector: Vector<Omit<T, "direction">>,
): candidateSuperVector is Vector<Omit<T, "direction"> & { direction: Direction.SUPER }> =>
    !(isVectorUnison(candidateSuperVector) || isVectorSub(candidateSuperVector))

const isVectorUnison = <T extends NumericProperties>(
    candidateUnisonVector: Vector<Omit<T, "direction">>,
): candidateUnisonVector is Vector<Omit<T, "direction"> & { direction: Direction.UNISON }> =>
    candidateUnisonVector.every((primeCount: Count<Prime>): boolean => primeCount === 0)

const computeSuperVector: {
    <T extends NumericProperties>(vector: Vector<T & { direction: Direction.UNISON }>): Vector<
        Omit<T, "direction"> & { direction: Direction.UNISON }
    >
    <T extends NumericProperties>(vector: Vector<T>): Vector<
        Omit<T, "direction"> & { direction: Direction.SUPER; integer: false }
    >
} = <T extends NumericProperties>(
    vector: Vector<T>,
): Vector<Omit<T, "direction"> & { direction: Direction.SUPER & Direction.UNISON }> =>
    isVectorSuper(vector) ? (vector as Vector<Omit<T, "direction">>) : invertVector(vector)

const computeSubVector: {
    <T extends NumericProperties>(vector: Vector<T & { direction: Direction.UNISON }>): Vector<
        Omit<T, "direction"> & { direction: Direction.UNISON }
    >
    <T extends NumericProperties>(vector: Vector<T>): Vector<
        Omit<T, "direction"> & { direction: Direction.SUB; integer: false }
    >
} = <T extends NumericProperties>(
    vector: Vector<T>,
): Vector<Omit<T, "direction"> & { direction: Direction.SUB & Direction.UNISON }> =>
    isVectorSub(vector) ? (vector as Vector<Omit<T, "direction">>) : invertVector(vector)

const invertVector: {
    <T extends NumericProperties>(vector: Vector<T & { direction: Direction.SUPER }>): Vector<
        Omit<T, "direction"> & { direction: Direction.SUB; integer: false }
    >
    <T extends NumericProperties>(vector: Vector<T & { direction: Direction.SUB }>): Vector<
        Omit<T, "direction"> & { direction: Direction.SUPER; integer: false }
    >
    <T extends NumericProperties>(vector: Vector<T & { direction: Direction.UNISON }>): Vector<
        Omit<T, "direction"> & { direction: Direction.UNISON }
    >
    <T extends NumericProperties>(vector: Vector<T>): Vector<
        Omit<T, "direction"> & { integer: false }
    >
} = <T extends NumericProperties>(
    vector: Vector<T>,
): Vector<
    Omit<T, "direction"> & { direction: Direction.SUPER & Direction.SUB & Direction.UNISON }
> =>
    vector.map((primeCount: Count<Prime>): Count<Prime> => {
        return primeCount === 0 ? (0 as Count<Prime>) : (-primeCount as Count<Prime>)
    }) as Vector<Omit<T, "direction">>

export {
    isVectorSub,
    isVectorSuper,
    isVectorUnison,
    computeSuperVector,
    computeSubVector,
    invertVector,
}
