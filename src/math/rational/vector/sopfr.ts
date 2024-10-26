import { Count } from "../../../types"
import { Vector, NumericProperties } from "../../numeric"
import { abs } from "../../typedOperations"
import { computePrimes } from "../primes"
import { Prime, Sopfr } from "../types"

// Sum Of Prime Factors with Repetition

const computeRationalVectorSopfr = <T extends NumericProperties>(
    rationalVector: Vector<T & { rational: true }>,
): Sopfr<T> => {
    const primes = computePrimes()

    return rationalVector.reduce(
        (sopfr: Sopfr<T>, primeCount: Count<Prime>, index: number): Sopfr<T> => {
            const prime = abs(primeCount * primes[index])

            return (sopfr + prime) as Sopfr<T>
        },
        0 as Sopfr<T>,
    )
}

export { computeRationalVectorSopfr }
