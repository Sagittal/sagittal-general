import {Decimal, Pev, NumericProperties} from "../../numeric"
import {abs} from "../../typedOperations"
import {Exponent} from "../../types"
import {Copfr, Prime} from "../types"

// Count Of Prime Factors with Repetition (big omega, Ω)

const computeRationalPevCopfr = <T extends NumericProperties>(
    rationalPev: Pev<T & {rational: true}>,
): Copfr<T> =>
    rationalPev.reduce(
        (copfr: Copfr<T>, primeExponent: Decimal<{integer: true}> & Exponent<Prime>): Copfr<T> =>
            copfr + abs(primeExponent) as Copfr<T>,
        0 as Copfr<T>,
    )

export {
    computeRationalPevCopfr,
}
