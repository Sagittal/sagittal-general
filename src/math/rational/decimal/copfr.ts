import {Decimal, NumericProperties} from "../../numeric"
import {computeRationalVectorCopfr, computeRationalVectorFromRationalDecimal} from "../vector"
import {Copfr} from "../types"

// Count Of Prime Factors with Repetition (big omega, Ω)

const computeRationalDecimalCopfr = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & {rational: true}>,
): Copfr<T> => {
    const rationalVector = computeRationalVectorFromRationalDecimal(rationalDecimal)

    return computeRationalVectorCopfr(rationalVector)
}

export {
    computeRationalDecimalCopfr,
}
