import {computeTrimmedArray, increment} from "../../../code"
import {Decimal} from "../../index"
import {Monzo, NumericProperties} from "../../numeric"
import {Exponent} from "../../types"
import {computeRoughnessIndex} from "../primeCount"
import {Prime, Primes, Roughness} from "../types"

const computeRoughRationalMonzo = <S extends Primes, T extends NumericProperties>(
    rationalMonzo: Monzo<Omit<T, "rough"> & {rational: true}>,
    roughness: S & Roughness,
): Monzo<Omit<T, "rough"> & {rational: true, rough: S}> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    return computeTrimmedArray(
        (rationalMonzo as Monzo<T & {rational: true}>).map(
            (
                primeExponent: Decimal<{integer: true}> & Exponent<Prime>,
                index: number,
            ): Decimal<{integer: true}> & Exponent<Prime> =>
                index < roughnessIndex ?
                    0 as Decimal<{integer: true}> & Exponent<Prime> :
                    primeExponent,
        ),
    ) as Monzo<T & {rational: true, rough: S}>
}

const isRationalMonzoRough = <S extends Primes, T extends NumericProperties>(
    candidateRoughRationalMonzo: Monzo<Omit<T, "rough"> & {rational: true}>,
    roughness: S & Roughness,
): candidateRoughRationalMonzo is Monzo<Omit<T, "rough"> & {rational: true, rough: S}> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    let index = 0
    while (index < roughnessIndex) {
        if (candidateRoughRationalMonzo[index] !== 0) return false
        index = increment(index)
    }

    return true
}

export {
    computeRoughRationalMonzo,
    isRationalMonzoRough,
}
