import {Decimal, NumericProperties} from "../../numeric"
import {computeRationalPevCopfr, computeRationalPevFromRationalDecimal} from "../pev"
import {Copfr} from "../types"

// Count Of Prime Factors with Repetition (big omega, Ω)

const computeRationalDecimalCopfr = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & {rational: true}>,
): Copfr<T> => {
    const rationalPev = computeRationalPevFromRationalDecimal(rationalDecimal)

    return computeRationalPevCopfr(rationalPev)
}

export {
    computeRationalDecimalCopfr,
}
