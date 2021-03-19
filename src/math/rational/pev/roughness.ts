import {computeTrimmedArray, increment} from "../../../code"
import {Decimal} from "../../index"
import {Pev, NumericProperties} from "../../numeric"
import {Exponent} from "../../types"
import {computeRoughnessIndex} from "../primeCount"
import {Prime, Primes, Roughness} from "../types"

const computeRoughRationalPev = <S extends Primes, T extends NumericProperties>(
    rationalPev: Pev<Omit<T, "rough"> & {rational: true}>,
    roughness: S & Roughness,
): Pev<Omit<T, "rough"> & {rational: true, rough: S}> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    return computeTrimmedArray(
        (rationalPev as Pev<T & {rational: true}>).map(
            (
                primeExponent: Decimal<{integer: true}> & Exponent<Prime>,
                index: number,
            ): Decimal<{integer: true}> & Exponent<Prime> =>
                index < roughnessIndex ?
                    0 as Decimal<{integer: true}> & Exponent<Prime> :
                    primeExponent,
        ),
    ) as Pev<T & {rational: true, rough: S}>
}

const isRationalPevRough = <S extends Primes, T extends NumericProperties>(
    candidateRoughRationalPev: Pev<Omit<T, "rough"> & {rational: true}>,
    roughness: S & Roughness,
): candidateRoughRationalPev is Pev<Omit<T, "rough"> & {rational: true, rough: S}> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    let index = 0
    while (index < roughnessIndex) {
        if (candidateRoughRationalPev[index] !== 0) return false
        index = increment(index)
    }

    return true
}

export {
    computeRoughRationalPev,
    isRationalPevRough,
}
