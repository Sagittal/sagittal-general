import {Decimal, NumericProperties} from "../../numeric"
import {computeRationalPevFromRationalDecimal, computeRationalPevSopfr} from "../pev"
import {Sopfr} from "../types"

// Sum Of Prime Factors with Repetition

const computeRationalDecimalSopfr = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & {rational: true}>,
): Sopfr<T> =>
    computeRationalPevSopfr(computeRationalPevFromRationalDecimal(rationalDecimal))

export {
    computeRationalDecimalSopfr,
}
