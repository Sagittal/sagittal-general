import { Decimal, NumericProperties } from "../../numeric"
import { Rational, Sopfr } from "../types"
import { computeRationalVectorFromRationalDecimal, computeRationalVectorSopfr } from "../vector"

// Sum Of Prime Factors with Repetition

const computeRationalDecimalSopfr = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & Rational>,
): Sopfr<T> => computeRationalVectorSopfr(computeRationalVectorFromRationalDecimal(rationalDecimal))

export { computeRationalDecimalSopfr }
