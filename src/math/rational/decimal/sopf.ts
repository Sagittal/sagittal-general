import { Decimal, NumericProperties, PrimeCount, Rational } from "../../numeric"
import { computePrimes } from "../primes"
import { Sopf } from "../types"
import { computeRationalVectorFromRationalDecimal } from "../vector"

// Sum Of Prime Factors (without repetition)

const computeRationalDecimalSopf = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & Rational>,
): Sopf<T> => {
    const rationalVector = computeRationalVectorFromRationalDecimal(rationalDecimal)

    const primes = computePrimes(rationalDecimal)

    return rationalVector.reduce(
        (copf: Sopf<T>, primeCount: PrimeCount<T>, index: number): Sopf<T> =>
            primeCount === 0 ? copf : ((copf + primes[index]) as Sopf<T>),
        0 as Sopf<T>,
    )
}

export { computeRationalDecimalSopf }
