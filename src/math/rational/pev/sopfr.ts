import {Pev, NumericProperties} from "../../numeric"
import {abs} from "../../typedOperations"
import {Exponent} from "../../types"
import {computePrimes} from "../primes"
import {Prime, Sopfr} from "../types"

// Sum Of Prime Factors with Repetition

const computeRationalPevSopfr = <T extends NumericProperties>(
    rationalPev: Pev<T & {rational: true}>,
): Sopfr<T> => {
    const primes = computePrimes()

    return rationalPev.reduce(
        (sopfr: Sopfr<T>, primeExponent: Exponent<Prime>, index: number): Sopfr<T> => {
            const prime = abs(primeExponent * primes[index])

            return sopfr + prime as Sopfr<T>
        },
        0 as Sopfr<T>,
    )
}

export {
    computeRationalPevSopfr,
}
