import { computeTrimmedArray, increment } from "../../../code"
import { Vector, PrimeCount, Rational } from "../../numeric"
import { computeRoughnessIndex } from "../roughness"
import { Primes, Rough, Roughness } from "../types"

const computeRoughRationalVector = <S extends Primes, T extends Rational>(
    rationalVector: Vector<T>,
    roughness: S & Roughness,
): Vector<T & Rough<S>> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    return computeTrimmedArray(
        rationalVector.map(
            (primeCount: PrimeCount<T>, index: number): PrimeCount<T> =>
                index < roughnessIndex ? (0 as PrimeCount<T>) : primeCount,
        ),
    ) as Vector<T & Rough<S>>
}

const isRationalVectorRough = <S extends Primes, T extends Rational>(
    candidateRoughRationalVector: Vector<T>,
    roughness: S & Roughness,
): candidateRoughRationalVector is Vector<T & Rough<S>> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    let index = 0
    while (index < roughnessIndex) {
        if (candidateRoughRationalVector[index] !== 0) return false
        index = increment(index)
    }

    return true
}

export { computeRoughRationalVector, isRationalVectorRough }
