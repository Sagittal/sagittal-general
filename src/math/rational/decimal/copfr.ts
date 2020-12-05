import {Decimal, NumericProperties} from "../../numeric"
import {computeRationalMonzoCopfr, computeRationalMonzoFromRationalDecimal} from "../monzo"
import {Copfr} from "../types"

// Count Of Prime Factors with Repetition (big omega, Ω)

const computeRationalDecimalCopfr = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & {rational: true}>,
): Copfr<T> => {
    const rationalMonzo = computeRationalMonzoFromRationalDecimal(rationalDecimal)

    return computeRationalMonzoCopfr(rationalMonzo)
}

export {
    computeRationalDecimalCopfr,
}
