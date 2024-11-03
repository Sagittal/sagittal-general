import { computeTrimmedArray, increment, indexOfFinalElement, isEmpty, Override } from "../../../code"
import { Decimal, Vector, NumericProperties } from "../../numeric"
import { count } from "../../typedOperations"
import { computePrimes } from "../primes"
import { computeSmoothnessIndex } from "../smoothness"
import { Integer, Primes, Rational, Smoothness } from "../types"

const isRationalVectorSmooth = <S extends Primes, T extends NumericProperties & Rational>(
    candidateSmoothRationalVector: Vector<Omit<T, "smooth">>,
    smoothness: S & Smoothness,
): candidateSmoothRationalVector is Vector<Override<T, "smooth", S>> => {
    let smoothnessIndex = computeSmoothnessIndex(smoothness)

    while (smoothnessIndex < count(candidateSmoothRationalVector)) {
        if (candidateSmoothRationalVector[smoothnessIndex] !== 0) return false
        smoothnessIndex = increment(smoothnessIndex)
    }

    return true
}

const computeRationalVectorSmoothness = <T extends NumericProperties & Rational = Rational>(
    rationalVector: Vector<T>,
): Smoothness => {
    const trimmedVector = computeTrimmedArray(rationalVector)

    if (isEmpty(trimmedVector)) {
        return 1 as Smoothness
    }

    const primes = computePrimes()

    return primes[indexOfFinalElement(trimmedVector)] as Decimal<Integer> as Smoothness
}

export { isRationalVectorSmooth, computeRationalVectorSmoothness }
