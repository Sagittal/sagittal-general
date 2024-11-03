import { computeTrimmedArray, increment, Override } from "../../../code"
import { Vector, NumericProperties, PrimeCount } from "../../numeric"
import { computeRoughnessIndex } from "../roughness"
import { Primes, Rational, Roughness } from "../types"

const computeRoughRationalVector = <S extends Primes, T extends NumericProperties>(
    rationalVector: Vector<Omit<T, "rough"> & Rational>,
    roughness: S & Roughness,
): Vector<Override<T, "rough", S> & Rational> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    return computeTrimmedArray(
        (rationalVector as Vector<T & Rational>).map(
            (primeCount: PrimeCount<T>, index: number): PrimeCount<T> =>
                index < roughnessIndex ? (0 as PrimeCount<T>) : primeCount,
        ),
    ) as Vector<T & Rational & { rough: S }>
}

const isRationalVectorRough = <S extends Primes, T extends NumericProperties>(
    candidateRoughRationalVector: Vector<Omit<T, "rough"> & Rational>,
    roughness: S & Roughness,
): candidateRoughRationalVector is Vector<Override<T, "rough", S> & Rational> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    let index = 0
    while (index < roughnessIndex) {
        if (candidateRoughRationalVector[index] !== 0) return false
        index = increment(index)
    }

    return true
}

export { computeRoughRationalVector, isRationalVectorRough }
