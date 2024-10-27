import { Decimal, NumericProperties, PrimeCount } from "../../numeric"
import { computeRationalVectorFromRationalDecimal } from "../vector"
import { computePrimes } from "../primes"
import { Sopf } from "../types"

// Sum Of Prime Factors (without repetition)

const computeRationalDecimalSopf = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & { rational: true }>,
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
