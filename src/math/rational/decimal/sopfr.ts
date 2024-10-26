import { Decimal, NumericProperties } from "../../numeric"
import { computeRationalVectorFromRationalDecimal, computeRationalVectorSopfr } from "../vector"
import { Sopfr } from "../types"

// Sum Of Prime Factors with Repetition

const computeRationalDecimalSopfr = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & { rational: true }>,
): Sopfr<T> => computeRationalVectorSopfr(computeRationalVectorFromRationalDecimal(rationalDecimal))

export { computeRationalDecimalSopfr }
