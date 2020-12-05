import {Monzo, NumericProperties} from "../../numeric"
import {abs} from "../../typedOperations"
import {Exponent} from "../../types"
import {PRIMES} from "../primes"
import {Prime, Sopfr} from "../types"

// Sum Of Prime Factors with Repetition

const computeRationalMonzoSopfr = <T extends NumericProperties>(
    rationalMonzo: Monzo<T & {rational: true}>,
): Sopfr<T> =>
    rationalMonzo.reduce(
        (sopfr: Sopfr<T>, primeExponent: Exponent<Prime>, index: number): Sopfr<T> => {
            const prime = abs(primeExponent * PRIMES[index])

            return sopfr + prime as Sopfr<T>
        },
        0 as Sopfr<T>,
    )

export {
    computeRationalMonzoSopfr,
}
