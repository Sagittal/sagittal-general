import { computeTrimmedArray, increment } from "../../../code"
import { Count } from "../../../types"
import { Decimal } from "../../index"
import { Vector, NumericProperties } from "../../numeric"
import { computeRoughnessIndex } from "../primeCount"
import { Prime, Primes, Roughness } from "../types"

const computeRoughRationalVector = <S extends Primes, T extends NumericProperties>(
    rationalVector: Vector<Omit<T, "rough"> & { rational: true }>,
    roughness: S & Roughness,
): Vector<Omit<T, "rough"> & { rational: true; rough: S }> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    return computeTrimmedArray(
        (rationalVector as Vector<T & { rational: true }>).map(
            (
                primeCount: Decimal<{ integer: true }> & Count<Prime>,
                index: number,
            ): Decimal<{ integer: true }> & Count<Prime> =>
                index < roughnessIndex
                    ? (0 as Decimal<{ integer: true }> & Count<Prime>)
                    : primeCount,
        ),
    ) as Vector<T & { rational: true; rough: S }>
}

const isRationalVectorRough = <S extends Primes, T extends NumericProperties>(
    candidateRoughRationalVector: Vector<Omit<T, "rough"> & { rational: true }>,
    roughness: S & Roughness,
): candidateRoughRationalVector is Vector<Omit<T, "rough"> & { rational: true; rough: S }> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    let index = 0
    while (index < roughnessIndex) {
        if (candidateRoughRationalVector[index] !== 0) return false
        index = increment(index)
    }

    return true
}

export { computeRoughRationalVector, isRationalVectorRough }
