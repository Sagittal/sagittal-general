import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { computeDecimalFromVector } from "../decimal"
import { Direction, NumericProperties } from "../types"
import { PrimeCount, Vector } from "./types"

const isVectorSub = <T extends NumericProperties>(
    candidateSubVector: Vector<Omit<T, "direction">>,
): candidateSubVector is Vector<Omit<T, "direction"> & { direction: Direction.SUB }> => {
    if (
        candidateSubVector.length &&
        candidateSubVector.every((primeCount: PrimeCount<Omit<T, "direction">>): boolean => primeCount >= 0)
    ) {
        return false
    }
    if (
        candidateSubVector.length &&
        candidateSubVector.every((primeCount: PrimeCount<Omit<T, "direction">>): boolean => primeCount <= 0)
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
    candidateUnisonVector.every((primeCount: PrimeCount<Omit<T, "direction">>): boolean => primeCount === 0)

const computeSuperVector = <T extends NumericProperties>(
    vector: Vector<T>,
): Vector<Omit<T, "direction"> & { direction: Direction.SUPER }> =>
    isVectorSuper(vector)
        ? (vector as Vector<Omit<T, "direction"> & { direction: Direction.SUPER }>)
        : (invertVector(vector) as Vector<Omit<T, "direction"> & { direction: Direction.SUPER }>)

const computeSubVector = <T extends NumericProperties>(
    vector: Vector<T>,
): Vector<Omit<T, "direction"> & { direction: Direction.SUB & Direction.UNISON }> =>
    // @ts-ignore
    isVectorSub(vector) ? (vector as Vector<Omit<T, "direction">>) : invertVector(vector)

const invertVector = <T extends NumericProperties>(vector: Vector<T>): Vector<Omit<T, "direction">> =>
    vector.map((primeCount: PrimeCount<T>): PrimeCount<Omit<T, "direction">> => {
        return primeCount === 0
            ? (0 as PrimeCount<Omit<T, "direction">>)
            : (-primeCount as PrimeCount<Omit<T, "direction">>)
    }) as Vector<Omit<T, "direction">>

export { isVectorSub, isVectorSuper, isVectorUnison, computeSuperVector, computeSubVector, invertVector }
