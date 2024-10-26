import { Decimal, NumericProperties } from "../../numeric"
import { computeRationalVectorFromRationalDecimal } from "../vector"
import { Copf, Prime } from "../types"
import { Count } from "../../../types"

// Count Of Prime Factors (without repetition) (little omega, ω)

const computeRationalDecimalCopf = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & { rational: true }>,
): Copf<T> => {
    const rationalVector = computeRationalVectorFromRationalDecimal(rationalDecimal)

    return rationalVector.reduce(
        (copf: Copf<T>, primeCount: Count<Prime> & Decimal<{ integer: true }>): Copf<T> =>
            primeCount === 0 ? copf : ((copf + 1) as Copf<T>),
        0 as Copf<T>,
    )
}

export { computeRationalDecimalCopf }
