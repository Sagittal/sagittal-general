import { Decimal, Denominator, Integer, Numerator, Quotient, Rational } from "../../numeric"
import { multiply } from "../../typedOperations"
import { isDecimalInteger } from "../decimal"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"

const computeRationalQuotientFromRationalDecimal = <T extends Rational>(
    rationalDecimal: Decimal<T>,
): Quotient<T> => {
    let integerDenominator: Denominator & Decimal<Integer> = 1 as Denominator & Decimal<Integer>
    let rationalNumerator = rationalDecimal as Numerator & Decimal<Rational>
    while (!isDecimalInteger(rationalNumerator)) {
        integerDenominator = multiply(integerDenominator, 10 as Decimal<Integer>) as Denominator &
            Decimal<Integer>
        rationalNumerator = multiply(rationalNumerator, 10 as Decimal<Integer>) as Numerator &
            Decimal<Rational>
    }

    const rationalQuotient = [
        rationalNumerator as Numerator & Decimal<Integer>,
        integerDenominator,
    ] as Quotient<T & Rational>

    return computeLowestTermsRationalQuotient(rationalQuotient)
}

export { computeRationalQuotientFromRationalDecimal }
