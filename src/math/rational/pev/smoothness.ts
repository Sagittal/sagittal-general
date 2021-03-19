import {computeTrimmedArray, increment, indexOfFinalElement, isEmpty} from "../../../code"
import {Decimal, Pev, NumericProperties} from "../../numeric"
import {count} from "../../typedOperations"
import {computeSmoothnessIndex} from "../primeCount"
import {computePrimes} from "../primes"
import {Primes, Smoothness} from "../types"

const isRationalPevSmooth = <S extends Primes, T extends NumericProperties>(
    candidateSmoothRationalPev: Pev<Omit<T, "smooth"> & {rational: true}>,
    smoothness: S & Smoothness,
): candidateSmoothRationalPev is Pev<Omit<T, "smooth"> & {rational: true, smooth: S}> => {
    let smoothnessIndex = computeSmoothnessIndex(smoothness)

    while (smoothnessIndex < count(candidateSmoothRationalPev)) {
        if (candidateSmoothRationalPev[smoothnessIndex] !== 0) return false
        smoothnessIndex = increment(smoothnessIndex)
    }

    return true
}

const computeRationalPevSmoothness = (rationalPev: Pev<{rational: true}>): Smoothness => {
    const trimmedPev = computeTrimmedArray(rationalPev)

    if (isEmpty(trimmedPev)) {
        return 1 as Smoothness
    }

    const primes = computePrimes()

    return primes[indexOfFinalElement(trimmedPev)] as Decimal<{integer: true}> as Smoothness
}

export {
    isRationalPevSmooth,
    computeRationalPevSmoothness,
}
