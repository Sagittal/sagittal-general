import { Decimal, Rational } from "../../numeric"
import { Copfr } from "../types"
import { computeRationalVectorCopfr, computeRationalVectorFromRationalDecimal } from "../vector"

// Count Of Prime Factors with Repetition (big omega, Ω)

const computeRationalDecimalCopfr = <T extends Rational>(rationalDecimal: Decimal<T>): Copfr<T> => {
    const rationalVector = computeRationalVectorFromRationalDecimal(rationalDecimal)

    return computeRationalVectorCopfr(rationalVector)
}

export { computeRationalDecimalCopfr }
