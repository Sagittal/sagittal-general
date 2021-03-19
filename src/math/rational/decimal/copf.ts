import {Decimal, NumericProperties} from "../../numeric"
import {Exponent} from "../../types"
import {computeRationalPevFromRationalDecimal} from "../pev"
import {Copf, Prime} from "../types"

// Count Of Prime Factors (without repetition) (little omega, ω)

const computeRationalDecimalCopf = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & {rational: true}>,
): Copf<T> => {
    const rationalPev = computeRationalPevFromRationalDecimal(rationalDecimal)

    return rationalPev.reduce(
        (copf: Copf<T>, primeExponent: Exponent<Prime> & Decimal<{integer: true}>): Copf<T> =>
            primeExponent === 0 ? copf : copf + 1 as Copf<T>,
        0 as Copf<T>,
    )
}

export {
    computeRationalDecimalCopf,
}
