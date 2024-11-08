import { Vector, PrimeCount, Rational } from "../../numeric"
import { abs } from "../../typedOperations"
import { computePrimes } from "../primes"
import { Sopfr } from "../types"

// Sum Of Prime Factors with Repetition

const computeRationalVectorSopfr = <T extends Rational>(rationalVector: Vector<T>): Sopfr<T> => {
    const primes = computePrimes()

    return rationalVector.reduce((sopfr: Sopfr<T>, primeCount: PrimeCount<T>, index: number): Sopfr<T> => {
        const prime = abs(primeCount * primes[index])

        return (sopfr + prime) as Sopfr<T>
    }, 0 as Sopfr<T>)
}

export { computeRationalVectorSopfr }
