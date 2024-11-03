import { Decimal, NumericProperties, PrimeCount } from "../../numeric"
import { Copf, Rational } from "../types"
import { computeRationalVectorFromRationalDecimal } from "../vector"

// Count Of Prime Factors (without repetition) (little omega, ω)

const computeRationalDecimalCopf = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & Rational>,
): Copf<T> => {
    const rationalVector = computeRationalVectorFromRationalDecimal(rationalDecimal)

    return rationalVector.reduce(
        (copf: Copf<T>, primeCount: PrimeCount<T>): Copf<T> =>
            primeCount === 0 ? copf : ((copf + 1) as Copf<T>),
        0 as Copf<T>,
    )
}

export { computeRationalDecimalCopf }
