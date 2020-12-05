import {computeTrimmedArray, increment, indexOfFinalElement, isEmpty} from "../../../code"
import {Decimal, Monzo, NumericProperties} from "../../numeric"
import {count} from "../../typedOperations"
import {computeSmoothnessIndex} from "../primeCount"
import {PRIMES} from "../primes"
import {Primes, Smoothness} from "../types"

const isRationalMonzoSmooth = <S extends Primes, T extends NumericProperties>(
    candidateSmoothRationalMonzo: Monzo<Omit<T, "smooth"> & {rational: true}>,
    smoothness: S & Smoothness,
): candidateSmoothRationalMonzo is Monzo<Omit<T, "smooth"> & {rational: true, smooth: S}> => {
    let smoothnessIndex = computeSmoothnessIndex(smoothness)

    while (smoothnessIndex < count(candidateSmoothRationalMonzo)) {
        if (candidateSmoothRationalMonzo[smoothnessIndex] !== 0) return false
        smoothnessIndex = increment(smoothnessIndex)
    }

    return true
}

const computeRationalMonzoSmoothness = (rationalMonzo: Monzo<{rational: true}>): Smoothness => {
    const trimmedMonzo = computeTrimmedArray(rationalMonzo)

    if (isEmpty(trimmedMonzo)) {
        return 1 as Smoothness
    }

    return PRIMES[indexOfFinalElement(trimmedMonzo)] as Decimal<{integer: true}> as Smoothness
}

export {
    isRationalMonzoSmooth,
    computeRationalMonzoSmoothness,
}
