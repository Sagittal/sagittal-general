import { computeTrimmedArray, increment, indexOfFinalElement, isEmpty } from "../../../code"
import { Decimal, Integer, Rational, Vector } from "../../numeric"
import { count } from "../../typedOperations"
import { computePrimes } from "../primes"
import { computeSmoothnessIndex } from "../smoothness"
import { Primes, Smooth, Smoothness } from "../types"

const isRationalVectorSmooth = <S extends Primes, T extends Rational>(
    candidateSmoothRationalVector: Vector<T>,
    smoothness: S & Smoothness,
): candidateSmoothRationalVector is Vector<T & Smooth<S>> => {
    let smoothnessIndex = computeSmoothnessIndex(smoothness)

    while (smoothnessIndex < count(candidateSmoothRationalVector)) {
        if (candidateSmoothRationalVector[smoothnessIndex] !== 0) return false
        smoothnessIndex = increment(smoothnessIndex)
    }

    return true
}

const computeRationalVectorSmoothness = <T extends Rational = Rational>(
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
