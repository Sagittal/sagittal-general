import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { computeDecimalFromVector } from "../decimal"
import { NumericProperties, Sub, Super, Unison, AnyDirection } from "../types"
import { PrimeCount, Vector } from "./types"

const isVectorSub = <T extends NumericProperties>(
    candidateSubVector: Vector<T>,
): candidateSubVector is Vector<T & Sub> => {
    if (
        candidateSubVector.length &&
        candidateSubVector.every((primeCount: PrimeCount<T>): boolean => primeCount >= 0)
    ) {
        return false
    }
    if (
        candidateSubVector.length &&
        candidateSubVector.every((primeCount: PrimeCount<T>): boolean => primeCount <= 0)
    ) {
        return true
    }

    return computeDecimalFromVector(candidateSubVector) < MULTIPLICATIVE_IDENTITY
}

const isVectorSuper = <T extends NumericProperties>(
    candidateSuperVector: Vector<T>,
): candidateSuperVector is Vector<T & Super> =>
    !(isVectorUnison(candidateSuperVector) || isVectorSub(candidateSuperVector))

const isVectorUnison = <T extends NumericProperties>(
    candidateUnisonVector: Vector<T>,
): candidateUnisonVector is Vector<T & Unison> =>
    candidateUnisonVector.every((primeCount: PrimeCount<T>): boolean => primeCount === 0)

const computeSuperVector = <T extends NumericProperties>(vector: Vector<T>): Vector<T & Super> =>
    isVectorSuper(vector) ? vector : invertVector(vector)

const computeSubVector = <T extends NumericProperties>(vector: Vector<T>): Vector<T & Sub> =>
    isVectorSub(vector) ? vector : invertVector(vector)

const invertVector = <T extends NumericProperties>(vector: Vector<T>): Vector<T & AnyDirection> =>
    vector.map((primeCount: PrimeCount<T>): PrimeCount<T> => {
        return primeCount === 0 ? (0 as PrimeCount<T>) : ((0 - primeCount) as PrimeCount<T>)
    }) as Vector<T & AnyDirection>

export { isVectorSub, isVectorSuper, isVectorUnison, computeSuperVector, computeSubVector, invertVector }
