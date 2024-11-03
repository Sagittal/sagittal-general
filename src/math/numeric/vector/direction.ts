import { Override } from "../../../code"
import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { computeDecimalFromVector } from "../decimal"
import { Direction, NumericProperties } from "../types"
import { PrimeCount, Vector } from "./types"

const isVectorSub = <T extends NumericProperties>(
    candidateSubVector: Vector<Omit<T, "direction">>,
): candidateSubVector is Vector<Override<T, "direction", Direction.SUB>> => {
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
): candidateSuperVector is Vector<Override<T, "direction", Direction.SUPER>> =>
    !(isVectorUnison(candidateSuperVector) || isVectorSub(candidateSuperVector))

const isVectorUnison = <T extends NumericProperties>(
    candidateUnisonVector: Vector<Omit<T, "direction">>,
): candidateUnisonVector is Vector<Override<T, "direction", Direction.UNISON>> =>
    candidateUnisonVector.every((primeCount: PrimeCount<Omit<T, "direction">>): boolean => primeCount === 0)

const computeSuperVector = <T extends NumericProperties>(
    vector: Vector<Omit<T, "direction">>,
): Vector<Override<T, "direction", Direction.SUPER>> =>
    isVectorSuper(vector)
        ? vector
        : (invertVector(vector) as Vector<Override<T, "direction", Direction.SUPER>>)

const computeSubVector = <T extends NumericProperties>(
    vector: Vector<Omit<T, "direction">>,
): Vector<Override<T, "direction", Direction.SUB>> =>
    isVectorSub(vector) ? vector : (invertVector(vector) as Vector<Override<T, "direction", Direction.SUB>>)

const invertVector = <T extends NumericProperties>(
    vector: Vector<Omit<T, "direction">>,
): Vector<Omit<T, "direction">> =>
    vector.map((primeCount: PrimeCount<Omit<T, "direction">>): PrimeCount<Omit<T, "direction">> => {
        return primeCount === 0
            ? (0 as PrimeCount<Omit<T, "direction">>)
            : ((0 - primeCount) as PrimeCount<Omit<T, "direction">>)
    }) as Vector<Omit<T, "direction">>

export { isVectorSub, isVectorSuper, isVectorUnison, computeSuperVector, computeSubVector, invertVector }
