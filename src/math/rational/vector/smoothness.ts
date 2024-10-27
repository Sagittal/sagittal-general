import { computeTrimmedArray, increment, indexOfFinalElement, isEmpty } from "../../../code"
import { Decimal, Vector, NumericProperties } from "../../numeric"
import { count } from "../../typedOperations"
import { computeSmoothnessIndex } from "../smoothness"
import { computePrimes } from "../primes"
import { Primes, Smoothness } from "../types"

const isRationalVectorSmooth = <S extends Primes, T extends NumericProperties>(
    candidateSmoothRationalVector: Vector<Omit<T, "smooth"> & { rational: true }>,
    smoothness: S & Smoothness,
): candidateSmoothRationalVector is Vector<Omit<T, "smooth"> & { rational: true; smooth: S }> => {
    let smoothnessIndex = computeSmoothnessIndex(smoothness)

    while (smoothnessIndex < count(candidateSmoothRationalVector)) {
        if (candidateSmoothRationalVector[smoothnessIndex] !== 0) return false
        smoothnessIndex = increment(smoothnessIndex)
    }

    return true
}

const computeRationalVectorSmoothness = (rationalVector: Vector<{ rational: true }>): Smoothness => {
    const trimmedVector = computeTrimmedArray(rationalVector)

    if (isEmpty(trimmedVector)) {
        return 1 as Smoothness
    }

    const primes = computePrimes()

    return primes[indexOfFinalElement(trimmedVector)] as Decimal<{ integer: true }> as Smoothness
}

export { isRationalVectorSmooth, computeRationalVectorSmoothness }
