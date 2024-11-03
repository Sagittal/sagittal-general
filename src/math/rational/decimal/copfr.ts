import { Decimal, NumericProperties } from "../../numeric"
import { Copfr, Rational } from "../types"
import { computeRationalVectorCopfr, computeRationalVectorFromRationalDecimal } from "../vector"

// Count Of Prime Factors with Repetition (big omega, Ω)

const computeRationalDecimalCopfr = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & Rational>,
): Copfr<T> => {
    const rationalVector = computeRationalVectorFromRationalDecimal(rationalDecimal)

    return computeRationalVectorCopfr(rationalVector)
}

export { computeRationalDecimalCopfr }
