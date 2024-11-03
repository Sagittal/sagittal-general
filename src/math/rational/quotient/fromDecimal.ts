import { Decimal, Denominator, Numerator, NumericProperties, Quotient } from "../../numeric"
import { multiply } from "../../typedOperations"
import { Multiplier } from "../../types"
import { isDecimalInteger } from "../decimal"
import { Integer, Rational } from "../types"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"

const computeRationalQuotientFromRationalDecimal = <T extends NumericProperties & Rational>(
    rationalDecimal: Decimal<T>,
): Quotient<T> => {
    let integerDenominator: Denominator & Decimal<Integer> = 1 as Denominator & Decimal<Integer>
    let rationalNumerator = rationalDecimal as Decimal
    while (!isDecimalInteger(rationalNumerator)) {
        integerDenominator = multiply(integerDenominator, 10 as Multiplier<Denominator & Decimal<Integer>>)
        rationalNumerator = rationalNumerator * 10
    }

    const rationalQuotient = [
        rationalNumerator as Numerator & Decimal<Integer>,
        integerDenominator,
    ] as Quotient<T & Rational>

    return computeLowestTermsRationalQuotient(rationalQuotient)
}

export { computeRationalQuotientFromRationalDecimal }
