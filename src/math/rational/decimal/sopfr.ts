import { Decimal, Rational } from "../../numeric"
import { Sopfr } from "../types"
import { computeRationalVectorFromRationalDecimal, computeRationalVectorSopfr } from "../vector"

// Sum Of Prime Factors with Repetition

const computeRationalDecimalSopfr = <T extends Rational>(rationalDecimal: Decimal<T>): Sopfr<T> =>
    computeRationalVectorSopfr(computeRationalVectorFromRationalDecimal(rationalDecimal))

export { computeRationalDecimalSopfr }
