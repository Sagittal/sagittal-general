import { Vector, PrimeCount, Rational } from "../../numeric"
import { abs } from "../../typedOperations"
import { Copfr } from "../types"

// Count Of Prime Factors with Repetition (big omega, Ω)

const computeRationalVectorCopfr = <T extends Rational>(rationalVector: Vector<T>): Copfr<T> =>
    rationalVector.reduce(
        (copfr: Copfr<T>, primeCount: PrimeCount<T>): Copfr<T> => (copfr + abs(primeCount)) as Copfr<T>,
        0 as Copfr<T>,
    )

export { computeRationalVectorCopfr }
