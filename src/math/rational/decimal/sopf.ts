import {Decimal, NumericProperties} from "../../numeric"
import {Exponent} from "../../types"
import {computeRationalPevFromRationalDecimal} from "../pev"
import {computePrimes} from "../primes"
import {Prime, Sopf} from "../types"

// Sum Of Prime Factors (without repetition)

const computeRationalDecimalSopf = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & {rational: true}>,
): Sopf<T> => {
    const rationalPev = computeRationalPevFromRationalDecimal(rationalDecimal)

    const primes = computePrimes(rationalDecimal)

    return rationalPev.reduce(
        (copf: Sopf<T>, primeExponent: Exponent<Prime> & Decimal<{integer: true}>, index: number): Sopf<T> =>
            primeExponent === 0 ? copf : copf + primes[index] as Sopf<T>,
        0 as Sopf<T>,
    )
}

export {
    computeRationalDecimalSopf,
}
