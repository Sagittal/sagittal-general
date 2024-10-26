import { Decimal, NumericProperties } from "../../numeric"
import { computeRationalVectorFromRationalDecimal } from "../vector"
import { computePrimes } from "../primes"
import { Prime, Sopf } from "../types"
import { Count } from "../../../types"

// Sum Of Prime Factors (without repetition)

const computeRationalDecimalSopf = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & { rational: true }>,
): Sopf<T> => {
    const rationalVector = computeRationalVectorFromRationalDecimal(rationalDecimal)

    const primes = computePrimes(rationalDecimal)

    return rationalVector.reduce(
        (
            copf: Sopf<T>,
            primeCount: Count<Prime> & Decimal<{ integer: true }>,
            index: number,
        ): Sopf<T> => (primeCount === 0 ? copf : ((copf + primes[index]) as Sopf<T>)),
        0 as Sopf<T>,
    )
}

export { computeRationalDecimalSopf }
