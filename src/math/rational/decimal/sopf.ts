import {Decimal, NumericProperties} from "../../numeric"
import {Exponent} from "../../types"
import {computeRationalMonzoFromRationalDecimal} from "../monzo"
import {PRIMES} from "../primes"
import {Prime, Sopf} from "../types"

// Sum Of Prime Factors (without repetition)

const computeRationalDecimalSopf = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & {rational: true}>,
): Sopf<T> => {
    const rationalMonzo = computeRationalMonzoFromRationalDecimal(rationalDecimal)

    return rationalMonzo.reduce(
        (copf: Sopf<T>, primeExponent: Exponent<Prime> & Decimal<{integer: true}>, index: number): Sopf<T> =>
            primeExponent === 0 ? copf : copf + PRIMES[index] as Sopf<T>,
        0 as Sopf<T>,
    )
}

export {
    computeRationalDecimalSopf,
}
